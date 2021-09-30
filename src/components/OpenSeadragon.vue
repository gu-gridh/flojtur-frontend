<template>
  <div ref="osd" class="osd"></div>
</template>

<script>
import OpenSeadragon from "openseadragon";

export default {
  name: "OpenSeadragon",
  props: {
    tileSources: Array,
    src: String,
    cover: {
      type: Boolean,
      default: false,
    },
    fullPage: Boolean,
  },
  data: () => ({
    viewer: null,
  }),
  mounted() {
    this.viewer = OpenSeadragon({
      /** @see https://openseadragon.github.io/docs/OpenSeadragon.html#.Options */
      element: this.$refs.osd,
      homeFillsViewer: this.cover,
      immediateRender: true,
      visibilityRatio: 1,
      minZoomImageRatio: 1,
      showZoomControl: false,
      showHomeControl: false,
      showFullPageControl: this.fullPage,
      prefixUrl: "/openseadragon/",
      // If a proper tileSource is not given, use src prop.
      tileSources: this.tileSources || { type: "image", url: this.src },
      sequenceMode: this.isMultiple,
      preserveViewport: true,
    });

    // Zoom in a bit over the middle.
    if (this.cover && !this.isMultiple) {
      // Thanks https://github.com/openseadragon/openseadragon/issues/979
      this.viewer.addHandler("open", function (event) {
        // Args are (x, y, width, height) as fractions of full image width/height
        const newBounds = new OpenSeadragon.Rect(0, 0.3, 1, 0);
        event.eventSource.viewport.fitBoundsWithConstraints(newBounds, true);
      });
    }
  },
  computed: {
    isMultiple() {
      return this.tileSources && this.tileSources.length > 1;
    },
  },
  watch: {
    tileSources() {
      this.viewer.open(this.tileSources);
    },
  },
};
</script>

<style scoped>
.osd {
  cursor: zoom-in;
}
</style>
