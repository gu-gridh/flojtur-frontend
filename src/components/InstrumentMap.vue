<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
import "@elfalem/leaflet-curve";
import {
  addGeojson,
  curve,
  curveMidpoint,
  focusLocation,
  makeMap,
  resetMap,
} from "@/assets/map";

export default {
  name: "Map",
  props: {
    features: Array,
    history: Array,
    focusId: [Number, String],
    popup: Boolean,
  },
  data: () => ({
    map: null,
    layer: null,
  }),
  methods: {
    loadFeatures() {
      resetMap(this.map);

      if (!this.history.length) return;

      // Add a smooth curve between points.
      const getPoint = ({ feature }) =>
        feature.geometry && [...feature.geometry.coordinates].reverse();
      curve(this.history.map(getPoint).filter(Boolean), {
        color: "#00000040",
      }).addTo(this.map);

      const onmouseover = (feature) =>
        this.$emit("focus", feature.properties.locationId);
      const onmouseout = (feature) =>
        this.$emit("unfocus", feature.properties.locationId);

      this.layer = addGeojson(
        this.map,
        this.features,
        this.popup,
        onmouseover,
        onmouseout
      );
    },
  },
  mounted() {
    this.map = makeMap("map");
    this.loadFeatures();
  },
  watch: {
    features() {
      if (this.map) this.loadFeatures();
    },
    focusId() {
      focusLocation(this.layer, this.focusId);
    },
  },
};
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  z-index: 0; /* Fixes border-radius in Safari. */
}
</style>
