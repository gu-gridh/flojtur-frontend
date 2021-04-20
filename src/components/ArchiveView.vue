<template>
  <div style="">
   <div id="MiddlePart">
      <div id="ItemContainer" style="">
       <div id="model">
        <div id="ItemLeft" style="">
          <ThreeDViewer />
        </div>
        <div id="ItemRight" style="">
          <div class="IntroItem">
          <div id="menu" class="IntroItem">
      
        Utforska arkivet
    
    </div>

    <div class="IntroMenuContainer">
      <div id="IntroInfoContainer">
        <div id="IntroInfoButton"></div>
      <div id="IntroInfoLabel"> <router-link to="/pehr-strand">Om Pehr Strand</router-link></div>
    </div>

        <div id="IntroInfoContainer">
          <div id="IntroInfoButton"></div>
      <div id="IntroInfoLabel" style=""><router-link to="/om">Om forskningsprojektet</router-link></div>
    </div>
    <div id="IntroInfoContainer">
          <div id="IntroInfoButton"></div>
      <div id="IntroInfoLabel" style="margin-bottom:40px;">
      <a v-scroll-to="'.ArchiveViewOptions'">Pehr Strands flöjtur</a></div>
    </div>
    </div>

            Ett självspelande flöjtur
          </div>
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
         <div id="InfoContainer">
      <div id="InfoButton"></div>
      <div id="InfoLabel" ><router-link :to="{ name: 'InstrumentAbout' }">Utforska mekaniken</router-link></div>
    </div>
        </div>
      </div>
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

#MiddlePart {
  height: auto;
  margin-bottom:10px;

}

#model {
  height: 800px;
}
#ItemContainer {

  width: 80%;
  height: auto;
  margin: 0px auto 20px;
}
#ItemLeft {
  width: 54.5%;
  height: 850px;
 
  margin-left: -50px;
  float: left;
 
}
#ItemRight {
  width: 45.5%;
  height: auto;
  margin-left: 20px;
  float: left;
}

.IntroItem {
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
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
  overflow:hidden;
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
  padding:30px 0 30px 0;
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
  width:250px;
  margin-left: -10px;
  border-radius: 15px;
  padding: 10px;
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


#IntroInfoContainer {
  display: flex;
  width:auto;
  margin-left: 0px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

#IntroInfoLabel {
  float: left;
  font-size: 25px;
  margin-top: 0px;
  margin-left: 20px;
}

#IntroInfoButton {
  float: left;
  margin-top:0px;
  height: 40px;
  width: 40px;
  background-image: url(../assets/linkbutton.png);
  background-size: 40px 40px;
}

</style>
