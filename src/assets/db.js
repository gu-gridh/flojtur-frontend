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

export function getInstruments() {
  // Each actual instrument has multiple autom records, one for each activity. Activity type 1 is "Inventering".
  return get("search", { tb: "autom", query: "equals|act_type|1" })
    .then((response) => {
      return Promise.all(
        response.data.features.map((record) =>
          // Get the full details for each and merge them with the brief info.
          getInstrument(record.id)
            .then((fields) => ({ ...record, fields }))
            .catch((error) => {
              console.error(error);
              return record;
            })
        )
      );
    })
    .catch((error) => console.error(error));
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
  const { features } = await search("barrel", query);

  // For each barrel search result item, make sub-requests to complement the data.
  // Each sub-request enriches the barrel item.
  const requestsByBarrel = features.map((hit) => [
    // Load each full record and add to each barrel item.
    getRecord("barrel", hit.id).then((record) => (hit.fields = record)),
    // Load full music info.
    search("barmus", `equals|nr1|${hit.id}`).then(async ({ features }) => {
      if (!features[0]) return;
      hit.music = features[0];
      const { features: features_1 } = await search("music", hit.music.id);
      Object.assign(hit.music, features_1[0]);
    }),
    // Find photos of each barrel.
    search("photo", `equals|barrel_nr|${hit.id}`).then(
      ({ features }) =>
        // Pick the title photo if available, otherwise any.
        (hit.photo = features.sort((a) =>
          a["tag.type"] === "title" ? -1 : 1
        )[0])
    )
  ]);

  // Flatten the list of lists.
  const allRequests = [].concat.apply([], requestsByBarrel);
  // Only when finished, proceed with the enriched barrel items.
  await Promise.all(allRequests);

  // Cache the result.
  if (!instrumentId) {
    allBarrels.push(...features);
  }

  return features;
}
