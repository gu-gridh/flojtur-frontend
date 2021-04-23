<template>
  <div ref="osd" class="osd"></div>
</template>

<script>
import OpenSeadragon from "openseadragon";

export default {
  name: "ZoomViewer",
  props: {
    filename: String,
    cover: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    viewer: null,
  }),
  mounted() {
    this.viewer = OpenSeadragon({
      element: this.$refs.osd,
      homeFillsViewer: this.cover,
      immediateRender: true,
      visibilityRatio: this.cover ? 1 : 0.5,
      minZoomImageRatio: this.cover ? 1 : 0.5,
      showZoomControl: false,
      showHomeControl: false,
      prefixUrl: "/openseadragon/",
      tileSources: [this.tileSource()],
    });
  },
  methods: {
    tileSource() {
      // Use IIIF for tiffs, plain url for jpegs.
      return this.filename.substr(-4) === ".tif"
        ? `https://img.dh.gu.se/flojtur/pyr/${this.filename}/info.json`
        : {
            type: "image",
            url: `https://data.dh.gu.se/flojtur/${this.filename}`,
          };
    },
  },
  watch: {
    filename() {
      this.viewer.open(this.tileSource());
    },
  },
};
</script>

<style>
.osd {
  height: 70vh;
}
</style>
