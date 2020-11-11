<template>
  <div :id="id"></div>
</template>

<script>
import "pannellum";
import "pannellum/build/pannellum.css";
import { v4 as uuid } from "uuid";

export default {
  name: "Panorama",
  data() {
    return {
      id: `panorama-${uuid()}`,
    };
  },
  mounted() {
    window.pannellum.viewer(this.id, {
      type: "equirectangular",
      autoLoad: true,
      autoRotate: -2,
      yaw: -60,
      compass: true,
      northOffset: 320.0,
      showZoomCtrl: false,
      panorama: "/panoramas/Panorama002.jpg",
    });
  },
};
</script>

<style>
</style>
