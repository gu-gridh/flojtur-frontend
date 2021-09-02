<template>
  <div @mouseover="load" :class="{ playing }">
    <audio id="Player" preload="none" ref="audio">
      <source
        v-if="defaultSound"
        src="@/assets/quadril.mp3"
        type="audio/mpeg"
      />
      <source v-else :src="url" type="audio/wav" />
    </audio>
    <div id="playContainer" @click="toggleSound">
      <div id="PlayButton"></div>
      <div id="PlayLabel">{{ playing ? "Pausa stycket" : "Spela stycke" }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: { defaultSound: Boolean, url: String },
  data() {
    return {
      playing: false,
    };
  },
  methods: {
    load() {
      this.$refs.audio.setAttribute("preload", "auto");
    },
    toggleSound() {
      this.playing ? this.$refs.audio.pause() : this.$refs.audio.play();
      this.playing = !this.$refs.audio.paused;
    },
  },
};
</script>

<style scoped>
#playContainer {
  display: flex;
  width: 265px;
  margin-left: -10px;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

#playContainer:hover {
  background-color: rgb(245, 245, 245);
}

#PlayButton {
  float: left;
  height: 40px;
  width: 40px;
  background-image: url(../assets/playbutton.png);
  background-size: 40px 40px;
}
.playing #PlayButton {
  background-image: url(../assets/pausebutton.png);
}

#PlayLabel {
  float: left;
  font-size: 25px;
  margin-top: 10px;
  margin-left: 20px;
}
</style>
