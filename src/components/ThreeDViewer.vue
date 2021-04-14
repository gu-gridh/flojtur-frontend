<template>
  <model-viewer
    class="model-viewer"
    reveal="interaction"
    loading="eager"
    src="/models/flojt.glb"
    poster="/models/flojt-model.png"
    alt="3d-modell av det mekaniska spelverket i ett flöjtur"
    camera-controls
    autoplay
    animation-name="929_flojtur_CADprep_jh_18"
    disable-zoom
    oncontextmenu="return false;"
    camera-orbit="-45deg 80deg 160.0m"
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
import "@google/model-viewer";
import "focus-visible";

export default {
  name: "ThreeDViewer",
};
</script>

<style scoped>
.model-viewer {
  height: 100%;
  width: 100%;
  --poster-color: transparent;
}
</style>
