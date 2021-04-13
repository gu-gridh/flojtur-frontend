<template>
  <div>
    <audio id="Player" preload="none">
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
  methods: {
    toggleSound() {
      var audioElem = document.getElementById("Player");
      console.log(audioElem);
      var audioIconElem = document.getElementById("PlayButton");
      var audioLabelElem = document.getElementById("PlayLabel");
      if (audioElem.paused) {
        audioIconElem.className = "PauseIcon";
        audioLabelElem.innerHTML = "Pausa stycket";
        audioElem.play();
      } else {
        audioIconElem.className = "PlayIcon";
        audioLabelElem.innerHTML = "Spela stycket";
        audioElem.pause();
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
