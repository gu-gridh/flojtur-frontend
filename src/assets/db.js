import axios from "axios";

const apiUrl = process.env.VUE_APP_APIURL || "https://dh.gu.se/ws/flojtur";

// Cache for barrel records.
let allBarrels = [];

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
  const [instruments, authists] = await Promise.all([
    searchFull("autom"),
    searchFull("authist")
  ]).catch((error) => console.error(error) || []);

  // Helper to find first autom record (Nytt instrument).
  const _histFindFirst = (instrument) => {
    const authist = authists.find(
      (authist) => authist.fields.nr2.value == instrument.id
    );
    if (!authist) return instrument;
    const prev = instruments.find(
      (instrument) => instrument.id == authist.fields.nr1.value
    );
    return _histFindFirst(prev);
  };

  // Only include Inventering records, and add their corresponding Nytt instrument records.
  return instruments.reduce(
    (acc, instrument) =>
      instrument.fields.act_type.value == "1"
        ? [...acc, { ...instrument, _first: _histFindFirst(instrument) }]
        : acc,
    []
  );
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

/** Follow the authist chain backwards. */
export async function getInstrumentHistoryBack(id) {
  const _recurse = async (automs, id) => {
    const autom = await getPreviousInstrument(id);
    return autom ? _recurse([autom, ...automs], autom.id.value) : automs;
  };
  return _recurse([], id);
}

export async function getPreviousInstrument(id) {
  const authist = await searchFull("authist", `equals|nr2|${id}`)
    .then((authists) => authists[0])
    .catch((error) => console.error(error));
  return authist && getInstrument(authist.fields.nr1.value);
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

/** Search and then request and add the full records. */
export async function searchFull(table, query) {
  const resShort = await search(table, query);
  const resFull = await get("edit", {
    tb: table,
    ids: resShort.features.map((short) => short.id).join()
  });
  return resShort.features.map((short) => ({
    ...short,
    ...resFull.data.find(({ fields }) => fields.id.value == short.id)
  }));
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
  const barrels = await searchFull("barrel", query);
  const barrelIds = barrels.map((barrel) => barrel.id);

  // Helper function for enriching the barrel records with associated data.
  const zipOntoBarrels = (prop, values, getBarrelId) =>
    barrels.forEach(
      (barrel) =>
        (barrel[prop] = values.find((item) => getBarrelId(item) == barrel.id))
    );

  // Each barrel record is enriched with more data from related tables.
  // These requests are done in parallel.
  await Promise.all([
    // Load full music info.
    (async () => {
      const barmuses = await searchFull("barmus", `in|nr1|${barrelIds.join()}`);
      const musicRes = await search(
        "music",
        `in|id|${barmuses.map((barmus) => barmus.fields.nr2.value).join()}`
      );
      zipOntoBarrels(
        "music",
        musicRes.features,
        (music) =>
          barmuses.find((barmus) => barmus.fields.nr2.value == music.id).fields
            .nr1.value
      );
    })(),

    // Find photos.
    (async () => {
      const photos = await searchFull(
        "photo",
        `in|barrel_nr|${barrelIds.join()}`
      );

      zipOntoBarrels(
        "photo",
        // Put title photos before others.
        photos.sort((photo) => (photo["tag.type"] === "title" ? -1 : 1)),
        (photo) => photo.fields.barrel_nr.value
      );
    })()
  ]);

  // Cache the result.
  if (!instrumentId) {
    allBarrels = [...barrels];
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

export function imageUrl(filename, width) {
  return filename
    ? filename.substr(-4) == ".tif"
      ? `https://img.dh.gu.se/flojtur/pyr/${filename}/full/${width},/0/default.jpg`
      : `https://data.dh.gu.se/flojtur/${width}x/${filename}`
    : "/interface/heroes/1b.jpg";
}

// These correspond to dirs on data server. When all jpgs are replaced with tifs we won't need these.
export const imageUrlThumb = (filename) => imageUrl(filename, 300);
export const imageUrlMedium = (filename) => imageUrl(filename, 500);
export const imageUrlLarge = (filename) => imageUrl(filename, 1000);
