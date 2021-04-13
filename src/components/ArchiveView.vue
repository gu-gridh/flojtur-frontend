<template>
  <div>
    <div id="model">
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

    <div class="links">
      <div class="ArchiveViewOptions">
        <router-link to="/" class="viewOption">Galleri</router-link>
        <div class="viewOption">|</div>
        <router-link class="viewOption" to="/karta">Karta</router-link>
        <div class="viewOption">|</div>
        <router-link class="viewOption" to="/valsar">Stiftvalsar</router-link>
        <div class="viewOption">|</div>
        <router-link class="viewOption" to="/data">
          Avancerad sökning
        </router-link>
      </div>
    </div>

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { getBarrels } from "../assets/db";
const ThreeDViewer = () =>
  import(/* webpackChunkName: "3d" */ "@/components/ThreeDViewer.vue");
import PlayButton from "@/components/PlayButton.vue";

export default {
  name: "ArchiveView",
  components: { ThreeDViewer, PlayButton },
  created() {
    // Pre-load data, unless starting out on the barrel page, because BarrelsTable will do it then.
    if (this.$route.name !== "BarrelOverview") getBarrels();
  },
};
</script>

<style lang="scss" scoped>
#model {
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
}

.IntroItem {
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: auto;
  height: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 35px;
  line-height: 1.8;
}

.articleIngress {
  columns: 1;
  text-align: center;
  line-height: 1.2;
}

.links {
  height: 40px;
  width: 100%;
  float: left;
  margin-top: -50px;
  margin-bottom: 20px;
}
.ArchiveViewOptions {
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  text-align: center;
}
.viewOption {
  display: inline-block;
  width: auto;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
  transition: all 0.2s ease-in-out;
}
.viewOption.router-link-exact-active {
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: black;
  height: 30px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
</style>
