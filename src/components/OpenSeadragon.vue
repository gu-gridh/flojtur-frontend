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
      default: true,
    },
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
      visibilityRatio: this.cover ? 1 : 0.5,
      minZoomImageRatio: this.cover ? 1 : 0.5,
      showZoomControl: false,
      showHomeControl: false,
      showFullPageControl: !!this.filename,
      prefixUrl: "/openseadragon/",
      // If a proper tileSource is not given, use src prop.
      tileSources: this.tileSources || { type: "image", url: this.src },
    });

    // Zoom in a bit over the middle.
    if (this.cover) {
      // Thanks https://github.com/openseadragon/openseadragon/issues/979
      this.viewer.addHandler("open", function (event) {
        // Args are (x, y, width, height) as fractions of full image width/height
        const newBounds = new OpenSeadragon.Rect(0, 0.3, 1, 0);
        event.eventSource.viewport.fitBoundsWithConstraints(newBounds, true);
      });
    }
  },
  watch: {
    tileSources() {
      this.viewer.open(this.tileSources);
    },
  },
};
</script>
