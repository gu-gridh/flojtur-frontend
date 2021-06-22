import "leaflet/dist/leaflet.css";
import L from "leaflet";

export function makeMap(el) {
  const map = L.map(el);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ["a", "b", "c"]
  }).addTo(map);

  return map;
}

export function resetMap(map) {
  let i = 0;
  map.eachLayer((layer) => {
    i++ > 0 && layer.remove();
  });
}

export function addGeojson(map, geojson, popup, onmouseover, onmouseout) {
  resetMap(map);
  const layer = L.geoJSON(geojson, {
    pointToLayer: (feature, latlng) =>
      L.circleMarker(latlng, markerOptions)
        .on("mouseover", () => onmouseover(feature))
        .on("mouseout", () => onmouseout(feature)),
    onEachFeature: popup
      ? (feature, layer) => layer.bindPopup(feature.properties.name)
      : null
  }).addTo(map);
  if (layer.getBounds().isValid()) map.fitBounds(layer.getBounds());
  return layer;
}

export function focusLocation(layer, locationId) {
  layer.setStyle((feature) =>
    feature.properties.locationId == locationId
      ? markerOptionsFocus
      : markerOptions
  );
}

const markerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

const markerOptionsFocus = {
  ...markerOptions,
  fillColor: "#00ff88",
  radius: 10
};
