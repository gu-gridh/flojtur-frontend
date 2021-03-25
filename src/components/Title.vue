<template>
  <div>
    <h1 id="site-title">Pehr Strands spelur</h1>
    <div class="subtitle">1763–1810</div>

    <div class="ornament lyre"></div>

    <div class="articleContainer">
      <div class="articleIngress" style="margin-top: 10px">
        Termen <em>flöjtur</em> brukar på svenska användas för de mekaniska
        spelverk som byggts in i större golvur och där tonen alstras med hjälp
        av pipor liknande dem man finner i traditionella piporglar. I Sverige
        byggdes denna typ av spelverk under andra hälften av 1700-talet och en
        bit in på 1800-talet. Flöjturet hör till en grupp instrument som brukar
        benämnas <em>självspelande instrument</em> eller <em>spelautomater</em>.
      </div>
      <div
        class="articleIngress"
        style="
          margin-top: 10px;
          width: 70%;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        "
      >
        A completeley different text than the one above, yes this is a
        completely different text than the one above and it is smaller. A
        completeley different text than the one above a completely different
        text than the one above. A somewhat different text than the one above,
        but almost the same as the text that came before.
      </div>
    </div>

    <div
      id="menu"
      class="IntroItem"
      style="cursor: pointer"
      v-scroll-to="'#hero'"
    >
      Utforska arkivet
    </div>

    <div class="IntroMenuContainer">
      <div class="MenuItem">
        <router-link to="/introduktion">Introduktion till arkivet</router-link>
      </div>
      <div class="MenuItem">|</div>
      <div class="MenuItem">
        <router-link to="/om">Om forskningsprojektet</router-link>
      </div>
    </div>

    <div class="ornament laural"></div>

    <div id="hero">
      <div id="ItemContainer" style="">
        <div id="ItemLeft" style="">
          <ThreeDViewer
            src="/models/flojt.glb"
            poster="/models/poster4.png"
            alt="Flöjtur model"
          />
        </div>
        <div id="ItemRight" style="">
          <div class="IntroItem">Ett självspelande flöjtur</div>
          <div
            class="articleIngress"
            style="margin-top: 10px; text-align: left"
          >
            Termen <i>flöjtur</i> brukar på svenska användas för de mekaniska
            spelverk som byggts in i större golvur och där tonen alstras med
            hjälp av pipor liknande dem man finner i traditionella piporglar. I
            Sverige byggdes denna typ av spelverk under andra hälften av
            1700-talet och en bit in på 1800-talet. Flöjturet hör till en grupp
            instrument som brukar benämnas <i>självspelande instrument</i> eller
            <i>spelautomater</i>.
          </div>
          <div style="display: flex; margin-top: 20px">
            <PlayButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ThreeDViewer = () =>
  import(/* webpackChunkName: "3d" */ "@/components/ThreeDViewer.vue");
import PlayButton from "@/components/PlayButton.vue";

export default {
  name: "Title",
  components: { ThreeDViewer, PlayButton },
};
</script>

<style lang="scss" scoped>
#site-title {
  margin-top: 0;
  padding-top: 250px;
}

.subtitle {
  line-height: 0.5;
  text-align: center;
  font-size: 30px;
}

.ornament {
  margin: 0 auto;
  background-size: cover;

  &.lyre {
    background-image: url(../assets/topdetailwhite.png);
    height: 435px;
    width: 380px;
    margin-top: -350px;
  }
  &.laural {
    background-image: url(../assets/lauraldetailwhite.png);
    height: 175px;
    width: 200px;
  }
}

.articleIngress {
  columns: 1;
  text-align: center;
  line-height: 1.2;
}

.articletext {
  columns: 1;
  margin-top: 10px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  line-height: 1.2;
}

.IntroItem {
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: auto;
  height: auto;
  text-align: center;
  font-weight: 300;
  font-style: normal;
  font-size: 35px;
  line-height: 1.8;
}

.cardMiniImage {
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  border-radius: 50%;
  background-image: url(../assets/7.jpg);
  background-size: cover;
}

.IntroMenuContainer {
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  height: 50px;
  margin-top: 10px;
  text-align: center;
}
.MenuItem {
  width: auto;
  height: auto;
  font-weight: 300;
  font-style: normal;
  line-height: 1.8;
  float: left;
  margin-left: 20px;
}

#hero {
  height: 700px;
}
#ItemContainer {
  width: 72%;
  height: 500px;
  margin: 100px auto 20px;
}
#ItemLeft {
  width: 60%;
  height: 800px;
  margin-top: -150px;
  margin-left: -50px;
  float: left;
  border-radius: 50%;
}
#ItemRight {
  width: 40%;
  height: auto;
  margin-left: 20px;
  float: left;

  .IntroItem {
    text-align: left;
  }
}
</style>
