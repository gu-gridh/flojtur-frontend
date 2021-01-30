<template>
  <div>
    <div id="Valstriptyk">
      <div
        class="valsbild"
        style="
          background: url(interface/heroes/vals1.jpg);
          background-position: 50% 65%;
          background-size: 250%;
          background-repeat: no-repeat;
        "
      ></div>
      <div
        class="valsbild"
        style="
          background: url(interface/heroes/vals2.jpg);
          background-position: center;
          background-size: cover;
        "
      ></div>
      <div
        class="valsbild"
        style="
          background: url(interface/heroes/vals3.jpg);
          background-position: 50% 65%;
          background-size: 250%;
          background-repeat: no-repeat;
        "
      ></div>
    </div>

    <a href="index.html#herogallery">
      <div id="ItemBack"></div>
    </a>

    <div class="MainTitles" style="margin-top: 60px">
      Andante Convariatione af Haydn
    </div>

    <div style="width: 80%; margin-left: 10%; float: left">
      <audio id="Player" preload="none">
        <source src="audio/roll.m4a" type="audio/mpeg" />
      </audio>

      <div id="playContainer" onclick="javascript:toggleSound();">
        <div id="PlayButton" class="PlayIcon"></div>
        <div id="PlayLabel">Spela stycket</div>
      </div>
    </div>

    <div class="MetaContainerShort" style="font-size: 24px">
      <div class="MetaColumnShort">
        Komposit&ouml;r: <span>Joseph Haydn</span> <br />
        Stycke: <span>1815</span> <br />
        Plats: <span>&Aring;rsta Slott </span> <br />
        Antal pipor: <span>8 </span> <br />
      </div>

      <div class="MetaColumnShort">
        Antal pipor: <span>8 </span> <br />
        Snygghet: <span>Fenomenalt stiligt! </span> <br />
        Dimensioner (cm): <span>200 x 60 x 60 </span> <br />
        Tillverkare: <span>Per Strand</span> <br />
      </div>

      <div class="MetaColumnShort">
        Tillverkare: <span>Per Strand</span> <br />
        Antal pipor: <span>8 </span> <br />
        Snygghet: <span>Fenomenalt stiligt! </span> <br />
        Dimensioner (cm): <span>200 x 60 x 60 </span> <br />
      </div>
    </div>

    <div class="SectionTitles" style="margin-top: 40px">
      Valsar i samma samling
    </div>

    <div
      id="valsar"
      style="margin-top: 20px; float: left; margin-left: 9.5%; width: 81%"
    >
      <!-- TODO CardGrid -->
    </div>

    <div class="SectionTitles" style="margin-top: 40px">
      Mer av Joseph Haydn
    </div>

    <div
      id="komposit"
      style="margin-top: 20px; float: left; margin-left: 9.5%; width: 81%"
    >
      <!-- TODO CardGrid -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BarrelPage",
  props: {
    id: Number,
  },
  methods: {
    toggleSound() {
      var audioElem = document.getElementById("Player");
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

<style>
</style>   
