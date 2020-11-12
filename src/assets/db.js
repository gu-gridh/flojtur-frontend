import axios from "axios";

const apiUrl = "https://dh.gu.se/ws/flojtur/";

function get(name, params) {
  return axios.get(`${apiUrl}/${name}.php`, { params });
}

export function getInstruments() {
  // Each actual instrument has multiple autom records, one for each activity. Activity type 1 is "Inventering".
  return get("search", { tb: "autom", query: "equals|act_type|1" })
    .then((response) => {
      return Promise.all(
        response.data.features.map((record) =>
          // Get the full details for each and merge them with the brief info.
          getInstrument(record.id)
            .then((instrument) => ({
              ...record,
              ...instrument
            }))
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
  return get("edit", { tb: "autom", id })
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
