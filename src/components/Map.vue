<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

const markerOptionsFocus = {
  ...markerOptions,
  fillColor: "#00ff88",
  radius: 10,
};

export default {
  name: "Map",
  props: {
    features: Array,
    focusId: [Number, String],
    popup: Boolean,
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
      this.layer = L.geoJSON(this.features, {
        pointToLayer: (feature, latlng) =>
          L.circleMarker(latlng, markerOptions)
            .on("mouseover", () =>
              this.$emit("focus", feature.properties.locationId)
            )
            .on("mouseout", () =>
              this.$emit("unfocus", feature.properties.locationId)
            ),
        onEachFeature: this.popup
          ? (feature, layer) => layer.bindPopup(feature.properties.name)
          : null,
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
    focusId() {
      const isFeatureFocus = (feature) =>
        feature.properties.locationId == this.focusId;
      const style = (feature) =>
        isFeatureFocus(feature) ? markerOptionsFocus : markerOptions;
      this.layer.setStyle(style);
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
