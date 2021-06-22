<template>
  <div id="map"></div>
</template>

<script>
import { addGeojson, focusLocation, makeMap } from "@/assets/map";

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
  height: 600px;
  width: 100%;
}
</style>
