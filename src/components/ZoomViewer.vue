<template>
  <OpenSeadragon :tileSources="[tileSource()]" :cover="cover" />
</template>

<script>
import OpenSeadragon from "@/components/OpenSeadragon.vue";

export default {
  name: "ZoomViewer",
  props: {
    filename: String,
    cover: {
      type: Boolean,
      default: true,
    },
  },
  components: { OpenSeadragon },
  methods: {
    tileSource() {
      // Default to blurry placeholder.
      if (!this.filename) {
        return { type: "image", url: "/unknown.jpg" };
      }

      // Use IIIF for tiffs, plain url for jpegs.
      return this.filename.substr(-4) === ".tif"
        ? `https://img.dh.gu.se/flojtur/pyr/${this.filename}/info.json`
        : {
            type: "image",
            url: `https://data.dh.gu.se/flojtur/${this.filename}`,
          };
    },
  },
};
</script>

<style>
.osd {
  height: 70vh;
}
</style>
