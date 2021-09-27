<template>
  <div>
    <AppLeadin />

    <div class="container menu-model">
      <div id="ItemRight" style="margin-top: 50px">
        <div class="IntroItem">Ett självspelande flöjtur</div>
        <div class="articleIngress" style="margin-top: 10px; text-align: left">
          Flöjtur är en klocka med ett mekaniskt spelverk som kan spela
          musikstycken programmerade på en stiftvals. Termen
          <i>flöjtur</i> brukar på svenska användas för de spelverk som byggts
          in i större golvur och där tonen alstras med hjälp av pipor liknande
          dem man finner i traditionella piporglar. I Sverige byggdes denna typ
          av spelverk under andra hälften av 1700-talet och en bit in på
          1800-talet, där Pehr Strand var en av de mest framgångsrika byggarna.
          Flöjturet hör till en grupp instrument som brukar benämnas
          <i>självspelande instrument</i> eller <i>spelautomater</i>. <br />
          <br />
        </div>
         <div style="display: flex; margin-top: 0px">
          <PlayButton default-sound />
        </div>
        <router-link
          :to="{ name: 'builder' }"
          tag="div"
          class="IntroInfoContainer"
          style="margin-top:15px;"
        >
          <div id="InfoLabel">1. Om Pehr Strand</div>
        </router-link>

        <router-link
          :to="{ name: 'InstrumentAbout' }"
          tag="div"
          class="IntroInfoContainer"
          style=""
        >
          <div id="InfoLabel">2. Ett självspelande flöjtur</div>
        </router-link>

        <router-link
          :to="{ name: 'InstrumentAbout' }"
          tag="div"
          class="IntroInfoContainer"
          style=""
        >
          <div id="InfoLabel">3. Att bygga ett fl&ouml;jtur</div>
        </router-link>

        <router-link
          :to="{ name: 'InstrumentAbout' }"
          tag="div"
          class="IntroInfoContainer"
          style=""
        >
          <div id="InfoLabel">4. Att programmera en stiftvals</div>
        </router-link>

        <router-link
          :to="{ name: 'InstrumentAbout' }"
          tag="div"
          class="IntroInfoContainer"
          style=""
        >
          <div id="InfoLabel">5. En optisk valsl&auml;sare</div>
        </router-link>
       
       
        <div v-scroll-to="'.ArchiveViewOptions'" class="IntroInfoContainer" style="margin-top: 20px; height:40px;">
          <div id="IntroInfoButton" style=""></div>
          <div id="IntroInfoLabel" style="margin-top: 10px">
            Utforska arkivet
          </div>
        </div>
      </div>
      <div class="model">
        <ThreeDViewer />
      </div>
    </div>

    <div class="links">
      <div class="ArchiveViewOptions">
        <router-link
          to="/"
          class="links-button"
          :class="{ 'router-link-exact-active': $route.name === 'Home' }"
          >Flöjtur</router-link
        >
        |
        <router-link to="/karta" class="links-button">Karta</router-link>
        |
        <router-link to="/valsar" class="links-button">Stiftvalsar</router-link>
        <span class="sm-hidden">
          |
          <a href="https://strand.dh.gu.se/admin" class="links-button">
            Avancerad sökning
          </a>
        </span>
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
  mounted() {
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
        margin-left: 0px;
      }
    }
  }

  .model {
    // Invert the 10% margins from the container
    margin-inline: -12.5%;
  }
}

.model {
  min-height: 50vh;
  // Model viewport ratio is approx 1:1.3.
  max-height: min(100vh, 130vw);
  // Model viewer needs height set, even if min- and max-height should be enough.
  height: 800px;
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
  padding: 35px 0 30px 0;
  text-align: center;

  .links-button {
    width: auto;
    margin-inline: 5px;
    transition: all 0.2s ease-in-out;
    border-radius: 8px 10px 8px 10px;
    padding: 10px;

    @media screen and (min-width: 800px) {
      margin-inline: 30px;
    }

    &.router-link-exact-active {
      height: 30px;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      border-radius: 8px 10px 8px 10px;
      border-radius: 10px;
      background-color: rgb(245, 245, 245);
    }

    &:hover {
      background-color: rgb(235, 235, 235);
    }
  }
}

#InfoContainer {
  display: flex;
  margin-top: 10px;
  border-radius: 15px;
  cursor: pointer;
}

#InfoContainer:hover {
  background-color: rgb(235, 235, 235);
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
  margin-top: 2px;
  margin-left: 15px;
}

.IntroMenuContainer {
  margin: 20px 0 40px;
}

.IntroInfoContainer {
  height: 20px;
  width: 280px;
  border-radius: 15px;
  padding: 10px;
  margin-top: 2px;
  margin-left: -10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.IntroInfoContainer:hover {
  background-color: rgb(235, 235, 235);
}

#IntroInfoLabel {
  float: left;
  font-size: 25px;
  margin-top: 0px;
  margin-left: 20px;
  font-weight: 100;
}

#IntroInfoButton {
  float: left;
  margin-top: 0px;
  height: 40px;
  width: 40px;
  background-image: url(../assets/downbutton.png);
  background-size: 40px 40px;
}
</style>
