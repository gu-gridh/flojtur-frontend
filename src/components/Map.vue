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
  data: () => ({
    map: null,
    layer: null,
  }),
  methods: {
    loadFeatures() {
      // Remove any previously loaded layer.
      if (this.layer) this.map.removeLayer(this.layer);

      // Create and add layer.
      if (!this.features.length) return;
      const geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      };
      this.layer = L.geoJSON(this.features, {
        pointToLayer: (feature, latlng) =>
          L.circleMarker(latlng, geojsonMarkerOptions),
        onEachFeature: (feature, layer) =>
          layer.bindPopup(feature.properties.name),
      }).addTo(this.map);

      // Zoom and pan to fit.
      this.map.fitBounds(this.layer.getBounds());
    },
  },
  mounted() {
    this.map = L.map("map");

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ["a", "b", "c"],
    }).addTo(this.map);

    this.loadFeatures();
  },
  watch: {
    features() {
      if (this.map) this.loadFeatures();
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
