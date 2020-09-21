import axios from "axios";

const apiUrl = "https://dh.gu.se/ws/flojtur/"

function get(name, params) {
  return axios.get(`${apiUrl}/${name}.php`, { params });
}

export function getInstruments() {
  return get("list", { tb: 'autom' });
}

