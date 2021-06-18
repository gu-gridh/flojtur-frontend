<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "Map",
  props: {
    features: Array,
  },
  methods: {
    load() {
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

      const geojsonLayer = L.geoJSON(this.features, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
        },
        onEachFeature: onEachFeature,
      }).addTo(this.map);

      // Zoom and pan to fit.
      this.map.fitBounds(geojsonLayer.getBounds());
    },
  },
  mounted: function () {
    const map = L.map("map", {
      zoom: 4,
      center: [60.702098, 14.943204],
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ["a", "b", "c"],
    }).addTo(map);

    this.map = map;
    this.load();
  },
  watch: {
    features: {
      immediate: true,
      handler() {
        if (this.map) this.load();
      },
    },
  },
};
</script>

<style scoped>
#map {
  height: 600px;
  width: 100%;
}
</style>
