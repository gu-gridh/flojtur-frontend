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
  const layer = L.geoJSON(geojson, {
    pointToLayer: (feature, latlng) =>
      L.circleMarker(latlng, markerOptions)
        .on("mouseover", () => onmouseover && onmouseover(feature))
        .on("mouseout", () => onmouseout && onmouseout(feature)),
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

/** Add a smooth curve between points. */
export function curve(latlngs, style) {
  // See https://github.com/elfalem/Leaflet.curve#api
  // M: starting point
  const path = ["M", latlngs[0]];
  latlngs.slice(1).forEach((latlng, i) =>
    // Q: quadratic Bézier curve
    path.push("Q", curveMidpoint(latlngs[i], latlng), latlng)
  );
  return L.curve(path, style);
}

/** Find a point slightly off the center beween two points. */
export function curveMidpoint(latlng1, latlng2) {
  // Thanks to Ryan Catalani
  // https://ryancatalani.medium.com/creating-consistently-curved-lines-on-leaflet-b59bc03fa9dc
  const offsetX = latlng2[1] - latlng1[1];
  const offsetY = latlng2[0] - latlng1[0];

  const r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
  const theta = Math.atan2(offsetY, offsetX);

  const thetaOffset = 3.14 / 10;
  const r2 = r / 2 / Math.cos(thetaOffset);
  const theta2 = theta + thetaOffset;
  const midpointX = r2 * Math.cos(theta2) + latlng1[1];
  const midpointY = r2 * Math.sin(theta2) + latlng1[0];
  return [midpointY, midpointX];
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
