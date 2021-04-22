<template>
  <div>
    <AppLeadin />

    <div class="container menu-model">
      <div id="ItemRight" style="">
        <div class="IntroMenuContainer IntroItem">
          <div>Utforska arkivet</div>

          <router-link to="/pehr-strand" tag="div" id="IntroInfoContainer">
            <div id="IntroInfoButton"></div>
            <div id="IntroInfoLabel">Om Pehr Strand</div>
          </router-link>

          <router-link to="/om" tag="div" id="IntroInfoContainer">
            <div id="IntroInfoButton"></div>
            <div id="IntroInfoLabel" style="">Om forskningsprojektet</div>
          </router-link>

          <div v-scroll-to="'.ArchiveViewOptions'" id="IntroInfoContainer">
            <div id="IntroInfoButton"></div>
            <div id="IntroInfoLabel">Pehr Strands flöjtur</div>
          </div>
        </div>

        <div class="IntroItem">Ett självspelande flöjtur</div>
        <div class="articleIngress" style="margin-top: 10px; text-align: left">
          Termen <i>flöjtur</i> brukar på svenska användas för de mekaniska
          spelverk som byggts in i större golvur och där tonen alstras med hjälp
          av pipor liknande dem man finner i traditionella piporglar. I Sverige
          byggdes denna typ av spelverk under andra hälften av 1700-talet och en
          bit in på 1800-talet. Flöjturet hör till en grupp instrument som
          brukar benämnas <i>självspelande instrument</i> eller
          <i>spelautomater</i>.
        </div>
        <div style="display: flex; margin-top: 20px">
          <PlayButton />
        </div>
        <router-link
          :to="{ name: 'InstrumentAbout' }"
          tag="div"
          id="IntroInfoContainer"
        >
          <div id="InfoButton"></div>
          <div id="InfoLabel">Utforska mekaniken</div>
        </router-link>
      </div>
      <div class="model">
        <ThreeDViewer />
      </div>
    </div>

    <div class="links">
      <div class="ArchiveViewOptions">
        <router-link
          to="/"
          class="viewOption"
          :class="{ 'router-link-exact-active': $route.name === 'Home' }"
          >Galleri</router-link
        >
        <div class="viewOption">|</div>
        <router-link to="/karta" class="viewOption">Karta</router-link>
        <div class="viewOption">|</div>
        <router-link to="/valsar" class="viewOption">Stiftvalsar</router-link>
        <div class="viewOption">|</div>
        <router-link to="/data" class="viewOption">
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
import AppLeadin from "@/components/AppLeadin.vue";
const ThreeDViewer = () =>
  import(/* webpackChunkName: "3d" */ "@/components/ThreeDViewer.vue");
import PlayButton from "@/components/PlayButton.vue";

export default {
  name: "ArchiveView",
  components: { AppLeadin, ThreeDViewer, PlayButton },
  created() {
    // Pre-load data, unless starting out on the barrel page, because BarrelsTable will do it then.
    if (this.$route.name !== "BarrelOverview") getBarrels();
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 800px) {
  .menu-model {
    display: flex;
    flex-direction: row-reverse;
    align-items: stretch;

    > * {
      flex: 1;
      &:not(:last-child) {
        margin-left: -30px;
      }
    }
  }
}

.model {
  height: 800px;
  min-height: 50vh;
  margin: auto;
}

.IntroItem {
  margin-left: auto;
  margin-right: auto;
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
  overflow: hidden;
  height: 60px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 25px;
}
.ArchiveViewOptions {
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  padding: 30px 0 30px 0;
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

#InfoContainer {
  display: flex;
  margin-top: 10px;
  border-radius: 15px;
  cursor: pointer;
}

#InfoContainer:hover {
  background-color: rgb(245, 245, 245);
}

#InfoButton {
  float: left;
  height: 40px;
  width: 40px;
  background-image: url(../assets/linkbutton.png);
  background-size: 40px 40px;
}

#InfoLabel {
  float: left;
  font-size: 25px;
  margin-top: 13px;
  margin-left: 20px;
}

.IntroMenuContainer {
  margin: 20px 0 40px;
}

#IntroInfoContainer {
 height:40px;
  width: 265px;
  border-radius: 15px;
  padding:10px; 
  margin-top: 2px;
   margin-left: -10px;
  cursor: pointer;
   transition: all 0.2s ease-in-out;
}

#IntroInfoContainer:hover {
  background-color: rgb(245, 245, 245);
}

#IntroInfoLabel {
  float: left;
  font-size: 25px;
  margin-top: 0px;
  margin-left: 20px;
  font-weight:100;
}

#IntroInfoButton {
  float: left;
  margin-top: 0px;
  height: 40px;
  width: 40px;
  background-image: url(../assets/linkbutton.png);
  background-size: 40px 40px;
}
</style>
