<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getLocations } from "@/assets/db";

export default {
  name: "Map",
  data: function () {
    return {};
  },
  created: function () {
    getLocations().then((locations) => {
      function onEachFeature(feature, layer) {
        // called for every marker/instrument, set up click handlers
        layer.bindPopup(feature.properties.name);
      }

      const geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      };

      L.geoJSON(locations, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
        },
        onEachFeature: onEachFeature,
      }).addTo(this.map);
    });
  },
  mounted: function () {
    const map = L.map("map", {
      zoom: 4,
      center: [60.702098, 14.943204],
    });

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ["a", "b", "c"],
    }).addTo(map);

    this.map = map;
  },
};
</script>

<style scoped>
#map {
  height: 600px;
}
</style>
