<template>
  <model-viewer
    class="model-viewer"
    reveal="interaction"
    loading="eager"
    :src="src"
    :poster="poster"
    :alt="alt"
    camera-controls
    autoplay
    animation-name="929_flojtur_CADprep_jh_18"
    disable-zoom
    oncontextmenu="return false;"
    camera-orbit="-45deg 80deg 160.0m"
    camera-target="-20.0m 30m 0m"
    exposure="1.0"
    skyboxangle="120"
    shadows="false"
    shadow-intensity="0"
    shadow-softness="0"
    style=""
    ar-status="not-presenting"
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
    alt: String,
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
