import axios from "axios";
import fileSize from "filesize";

const apiUrl = process.env.VUE_APP_APIURL || "https://dh.gu.se/ws/flojtur";

// Cache for barrel records.
let allBarrels = [];

/** List of relevant instrument ids. Fetched from API; use with await. */
const automIds = search(
  "collection_autom",
  "equals|collection_id|1"
).then((collectionAutoms) =>
  collectionAutoms.features.map((rec) => rec["autom.id"])
);

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
    searchFull("autom", `in|id|${await automIds}`),
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
    return prev && _histFindFirst(prev);
  };

  // Only include Inventering records, and add their corresponding Nytt instrument records.
  return instruments
    .filter((instrument) => instrument.fields.act_type.value == "1")
    .map((instrument) => ({
      ...instrument,
      _first: _histFindFirst(instrument)
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
      ? allBarrels.filter((barrel) => barrel.i_nr == instrumentId)
      : allBarrels;
  }

  // Get all barrels if no instrument id is given.
  const query = instrumentId
    ? `equals|i_nr|${instrumentId}`
    : `in|i_nr|${await automIds}`;
  const barrels = await searchFull("barrel", query);
  const barrelIds = barrels.map((barrel) => barrel.id);

  // Helper function for enriching the barrel records with associated data.
  const zipOntoBarrels = (prop, values, getBarrelId) =>
    barrels.forEach(
      (barrel) =>
        (barrel[prop] = values.find((item) => getBarrelId(item) == barrel.id))
    );

  // Find photos.
  const photos = await searchFull("photo", `in|barrel_nr|${barrelIds.join()}`);
  zipOntoBarrels(
    "photo",
    // Put title photos before others.
    photos.sort((photo) => (photo["tag.type"] === "title" ? -1 : 1)),
    (photo) => photo.fields.barrel_nr.value
  );

  // Cache the result.
  if (!instrumentId) {
    allBarrels = [...barrels];
  }

  return barrels;
}

/** Guess the most reasonable way to present the field values of a database record. */
export function formatValues(fields) {
  const values = {};
  Object.keys(fields).forEach((prop) => {
    values[prop] = fields[prop].ftab ? fields[prop].extra : fields[prop].value;
    values[prop] = values[prop]
      .replace(/^[-?]$/, "")
      .replaceAll(/(\s*<br>)+/gi, ". ");
  });
  return values;
}

export function formatDates(date1, date2, sign, short = false) {
  // Get year part
  date1 = parseInt(date1);
  date2 = parseInt(date2);
  // Fixed date: has date2 and no date_sign
  if (!sign) return date2;
  // After some date
  if (!date2) return `efter ${date1}`;
  // Before some date
  if (!date1) return `före ${date2}`;
  // Between two dates
  return short ? `${date1}–${date2}` : `mellan ${date1} och ${date2}`;
}

export function imageUrl(filename, width) {
  return filename
    ? filename.substr(-4) == ".tif"
      ? `https://img.dh.gu.se/flojtur/pyr/${filename}/full/${width},/0/default.jpg`
      : `https://data.dh.gu.se/flojtur/${width}x/${filename}`
    : "/unknown.jpg";
}

// These correspond to dirs on data server. When all jpgs are replaced with tifs we won't need these.
export const imageUrlThumb = (filename) => imageUrl(filename, 300);
export const imageUrlMedium = (filename) => imageUrl(filename, 500);
export const imageUrlLarge = (filename) => imageUrl(filename, 1000);

export async function fetchFileSize(url) {
  const response = await axios.head(url);
  const bytes = response.headers["content-length"];
  return bytes ? fileSize(bytes) : undefined;
}
