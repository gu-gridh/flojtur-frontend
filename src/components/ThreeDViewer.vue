<template>
  <model-viewer
    class="model-viewer"
    reveal="interaction"
    src="/models/flojt.glb"
    alt="3d-modell av det mekaniska spelverket i ett flöjtur"
    camera-controls
    autoplay
    animation-name="929_flojtur_CADprep_jh_18"
    disable-zoom
   
    camera-orbit="-45deg 80deg 160.0m"
    exposure="1.0"
    skyboxangle="120"
    shadows="false"
    shadow-intensity="0"
    shadow-softness="0"
    
    ar-status="not-presenting"
  >
    <div id="lazy-load-poster" slot="poster"></div>
    <div id="button-load" slot="poster">
      <div id="button-load-label">
        Klicka här <br />
        för att ladda in modellen
      </div>
    </div>
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
  --progress-bar-color:rgba(0,0,0,0);
  --progress-bar-height:0px;
  --progress-mask:fff;
  --poster-color: transparent;
  --progress-mask: transparent;
}

#lazy-load-poster {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url("/models/flojt-model.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#button-load {
  background-color: rgba(255, 255, 255, 0.8);
  height: 150px;
  width: 150px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: 40%;
  top: 35%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 100;
  transition: all 0.2s ease-in-out;
  animation: pulse 2s infinite;
}

#button-load-label {
  color: black;
  padding: 10px;
  font-size: 26px;
  text-align: center;
  font-weight: 300;
  margin-top: 20%;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.95);
  }
}
</style>
