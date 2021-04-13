<template>
  <div @mouseover="load">
    <audio id="Player" preload="none" ref="audio">
      <source src="@/assets/vivaldi.mp3" type="audio/mpeg" />
    </audio>
    <div id="playContainer" @click="toggleSound">
      <div id="PlayButton" class="PlayIcon"></div>
      <div id="PlayLabel">Spela stycke</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    audio() {
      return this.$refs.audio;
    },
  },
  methods: {
    load() {
      this.audio.setAttribute("preload", "auto");
    },
    toggleSound() {
      var audioIconElem = document.getElementById("PlayButton");
      var audioLabelElem = document.getElementById("PlayLabel");
      if (this.audio.paused) {
        audioIconElem.className = "PauseIcon";
        audioLabelElem.innerHTML = "Pausa stycket";
        this.audio.play();
      } else {
        audioIconElem.className = "PlayIcon";
        audioLabelElem.innerHTML = "Spela stycket";
        this.audio.pause();
      }
    },
  },
};
</script>

<style scoped>
#playContainer {
  display: flex;
  margin-left: -10px;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
}

#playContainer:hover {
  background-color: rgb(245, 245, 245);
}
#PlayButton {
  float: left;
  height: 50px;
  width: 50px;
}
.PlayIcon {
  background: url(../assets/playbutton.png);
  background-size: 50px 50px;
}

.PauseIcon {
  background: url(../assets/pausebutton.png);
  background-size: 50px 50px;
}
#PlayLabel {
  float: left;
  font-size: 25px;
  margin-top: 13px;
  margin-left: 20px;
}
</style>
