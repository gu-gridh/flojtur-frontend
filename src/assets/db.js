import axios from "axios";

const apiUrl = "https://dh.gu.se/ws/flojtur/";

function get(name, params) {
  return axios.get(`${apiUrl}/${name}.php`, { params });
}

export function getInstruments() {
  return get("list", { tb: "autom" });
}

export function getLocations() {
  // TODO these values should come from map
  const bbox =
    "-17.752108500000002,26.719871179878666,47.6385165,77.34475721800521";
  return get("map", { layer: "autom", bbox });
}

export function getInstrument(id) {
  return get("edit", { tb: "autom", id });
}
