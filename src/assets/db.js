import axios from "axios";

const apiUrl = process.env.VUE_APP_APIURL || "https://dh.gu.se/ws/flojtur";

// Cache for barrel records.
const allBarrels = [];

function get(name, params) {
  return axios.get(`${apiUrl}/${name}.php`, { params });
}

export function getRecord(table, id) {
  return get("edit", { tb: table, id: parseInt(id) })
    .then((response) => response.data.fields)
    .catch((error) => {
      console.error(error);
    });
}

export function getRecords(table, ids) {
  return get("edit", { tb: table, ids: ids.join() })
    .then((response) => response.data.map((record) => record.fields))
    .catch((error) => {
      console.error(error);
    });
}

export async function getInstruments() {
  // Each actual instrument has multiple autom records, one for each activity. Activity type 1 is "Inventering".
  const shorts = await get("search", {
    tb: "autom",
    query: "equals|act_type|1"
  })
    .then((response) => response.data.features)
    .catch((error) => console.error(error) || []);

  // Get full records.
  const records = await getRecords(
    "autom",
    shorts.map((short) => short.id)
  ).catch((error) => console.error(error) || []);

  // Merge in the search results because they have some additional values.
  return records.map((fields) => ({
    fields,
    ...shorts.find((short) => short.id == fields.id.value)
  }));
}

export function getLocations() {
  // TODO these values should come from map
  const bbox =
    "-17.752108500000002,26.719871179878666,47.6385165,77.34475721800521";
  return get("map", { layer: "autom", bbox })
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export function getInstrument(id) {
  return getRecord("autom", id);
}

export function search(tb, query = "") {
  return (
    get("search", {
      tb,
      [query && query.includes("|") ? "query" : "sstring"]: query
    })
      // Data contains `features` (list of objects) and `num`.
      .then((response) => response.data)
      .catch((error) => console.error(error))
  );
}

export async function getBarrels(instrumentId = null) {
  // Try the cache first.
  if (allBarrels.length) {
    return instrumentId
      ? allBarrels.filter((barrel) => barrel.fields.i_nr.value == instrumentId)
      : allBarrels;
  }

  // Get all barrels if no instrument id is given.
  const query = instrumentId ? `equals|i_nr|${instrumentId}` : null;
  const { features: barrels } = await search("barrel", query);
  const barrelIds = barrels.map((barrel) => barrel.id);

  // Helper function for enriching the barrel records with associated data.
  const zipOntoBarrels = (prop, find) =>
    barrels.forEach((barrel) => (barrel[prop] = find(barrel.id)));

  // Each barrel record is enriched with more data from related tables.
  // These requests are done in parallel.
  await Promise.all([
    // Load full records.
    (async () => {
      const fullBarrels = await getRecords(
        "barrel",
        barrels.map((barrel) => barrel.id)
      );
      zipOntoBarrels("fields", (barrelId) =>
        fullBarrels.find((fields) => fields.id.value == barrelId)
      );
    })(),

    // Load full music info.
    (async () => {
      const barmusRes = await search("barmus", `in|nr1|${barrelIds.join()}`);
      const barmusFullRes = await get("edit", {
        tb: "barmus",
        ids: barmusRes.features.map((barmus) => barmus.id).join()
      });
      const barmuses = barmusRes.features.map((barmus) => ({
        ...barmus,
        ...barmusFullRes.data.find(({ fields }) => fields.id.value == barmus.id)
      }));
      const musicRes = await search(
        "music",
        `in|id|${barmuses.map((barmus) => barmus.fields.nr2.value).join()}`
      );
      zipOntoBarrels("music", (barrelId) =>
        musicRes.features.find(
          (music) =>
            barrelId ==
            barmuses.find((barmus) => barmus.fields.nr2.value == music.id)
              .fields.nr1.value
        )
      );
    })(),

    // Find photos.
    (async () => {
      const photosRes = await search(
        "photo",
        `in|barrel_nr|${barrelIds.join()}`
      );
      // Load full photo records just to find the barrel reference for each photo.
      const photosFullRes = await get("edit", {
        tb: "photo",
        ids: photosRes.features.map((photo) => photo.id).join()
      });

      // Merge full records into the short ones.
      const photos = photosRes.features.map((photo) => ({
        ...photo,
        ...photosFullRes.data.find(({ fields }) => fields.id.value == photo.id)
      }));

      zipOntoBarrels(
        "photo",
        (barrelId) =>
          photos
            // For each short photo, find the corresponding full photo  Get the photos of this ba
            .filter((photo) => photo.fields.barrel_nr.value == barrelId)
            // Pick the title photo if available, otherwise any.
            .sort((photo) => (photo["tag.type"] === "title" ? -1 : 1))[0]
      );
    })()
  ]);

  // Cache the result.
  if (!instrumentId) {
    allBarrels.push(...barrels);
  }

  return barrels;
}

export function formatValues(fields) {
  const values = {};
  Object.keys(fields).forEach((prop) => {
    values[prop] = fields[prop].ftab ? fields[prop].extra : fields[prop].value;
    values[prop] = values[prop].replace(/^[-?]$/, "");
  });
  return values;
}
