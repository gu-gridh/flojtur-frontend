import axios from "axios";
import fileSize from "filesize";

const apiUrl = process.env.VUE_APP_APIURL || "https://dh.gu.se/ws/flojtur";

// Cache for records.
let allBarrels = [];

/** Fetch authist records asap so they can be used when needed. */
const authistPromise = search("authist");

/** List of relevant instrument ids. Fetched from API; use with await. */
const automIds = search(
  "collection_autom",
  "equals|collection_id|1"
).then((collectionAutoms) =>
  collectionAutoms.features.map((rec) => rec["autom.id"])
);

function get(name, params) {
  return axios
    .get(`${apiUrl}/${name}.php`, { params })
    .catch((error) => console.error(error));
}

export const getRecord = (table, id) =>
  get("edit", { tb: table, id: parseInt(id) }).then(
    (response) => response.data.fields
  );

export const getRecords = (table, ids) =>
  get("edit", { tb: table, ids: ids.join() }).then((response) =>
    response.data.map((record) => record.fields)
  );

export async function getInstruments() {
  // Each actual instrument has multiple autom records, one for each activity. Activity type 1 is "Inventering".
  const instruments = await searchFull("autom", `in|id|${await automIds}`);
  if (!instruments) return [];

  // Helper to find first autom record (Nytt instrument).
  const findFirst = async (automId) => {
    const firstId = (await getInstrumentHistory(automId))[0];
    const firstFetched = instruments.find(
      (instrument) => instrument.id == firstId
    );
    if (firstFetched) return firstFetched;
    const firstSearch = await searchFull("autom", `equals|id|${firstId}`);
    return firstSearch[0];
  };

  // Only include Inventering records, and add their corresponding Nytt instrument records.
  return Promise.all(
    instruments
      .filter((instrument) => instrument.fields.act_type.value == "1")
      .map(async (instrument) => ({
        ...instrument,
        _first: await findFirst(instrument.id)
      }))
  );
}

export const getAutomLocations = async () =>
  get("map", { layer: "autom" }).then((response) => response.data);

export function getInstrument(id) {
  return getRecord("autom", id);
}

/** Get autom ids for full authist chain including a given autom id. */
export async function getInstrumentHistory(automId) {
  // Fetch all authist records.
  const authists = (await authistPromise).features;
  // Recursive helpers for getting ids going forwards and backwards from the given id.
  const forward = (automId) => {
    const authist = authists.find((authist) => authist["nr1.id"] == automId);
    const nextAutomId = (authist && authist["nr2.id"]) || null;
    return nextAutomId ? [automId, ...forward(nextAutomId)] : [automId];
  };
  const backward = (automId) => {
    const authist = authists.find((authist) => authist["nr2.id"] == automId);
    const prevAutomId = (authist && authist["nr1.id"]) || null;
    return prevAutomId ? [...backward(prevAutomId), automId] : [automId];
  };
  // Collect ids and fetch the full instrument of each.
  const automIds = [...backward(automId), ...forward(automId).slice(1)];
  return automIds;
}

export function search(tb, query = "") {
  const queryParamName = query && query.includes("|") ? "query" : "sstring";
  return (
    get("search", { tb, [queryParamName]: query, size: 0 })
      // Data contains `features` (list of objects) and `num`.
      .then((response) => response.data)
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
    const value = fields[prop].ftab ? fields[prop].extra : fields[prop].value;
    values[prop] =
      value && value.replace(/^[-?]$/, "").replaceAll(/(\s*<br>)+/gi, ". ");
  });
  return values;
}

export function formatDates(date1, date2, sign, short = false) {
  // Get year part
  date1 = String(parseInt(date1) || "");
  date2 = String(parseInt(date2) || "");
  // Fixed date: has date2 and no date_sign
  if (!sign) return date2 || date1 || undefined;
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
