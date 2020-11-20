<template>
  <model-viewer
    class="model-viewer"
    reveal="auto"
    loading="eager"
    :src="src"
    :poster="poster"
    alt="cube"
    camera-controls
    auto-rotate
    camera-orbit="-0deg 80deg 17.0m"
    camera-target="-0.0m 0m 0m"
    exposure="0.7"
    shadows="true"
    shadow-intensity="1"
    shadow-softness="1"
    style=""
  >
  </model-viewer>
</template>

<script>
import(/* webpackChunkName: "model-viewer" */ "@google/model-viewer");
import "focus-visible";

export default {
  name: "ThreeDViewer",
  props: {
    src: String,
    poster: String,
  },
};
</script>

<style scoped>
.model-viewer {
  height: 100%;
  width: 100%;
  --poster-color: transparent;
}
</style>
