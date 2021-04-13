<template>
  <div>
    <h1 id="site-title">
      <router-link to="/">Pehr Strands flöjtur</router-link>
    </h1>
    <div class="subtitle">1763–1810</div>

    <div class="ornament lyre"></div>

    <div class="articleContainer">
      <div class="articleIngress" style="margin-top: 10px">
        Pehr Strand (c. 1758–1826) var orgel- och flöjtursbyggare i Stockholm
        kring sekelskiftet 1800. Denna webbportal är en redovisning av ett
        forskningsprojekt och samtidigt en källa till information om Pehr Strand
        och i synnerhet hans flöjtur.
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
        Flöjtur är en klocka med ett mekaniskt spelverk som kan spela
        musikstycken programmerade på en stiftvals. Termen flöjtur anger också
        att tonen alstras med hjälp av pipor på samma sätt som i traditionella
        piporglar. I Sverige byggdes denna typ av flöjtur främst under andra
        hälften av 1700-talet och en bit in på 1800-talet, där Pehr Strand var
        en av de mest framgångsrika byggarna.
      </div>
    </div>

    <div id="menu" class="IntroItem">
      <a
        v-if="isHomeChildPage"
        style="cursor: pointer"
        href="#model"
        v-scroll-to="'#model'"
      >
        Utforska arkivet
      </a>
      <router-link v-else to="/#model" id="menu" class="IntroItem">
        Utforska arkivet
      </router-link>
    </div>

    <div class="IntroMenuContainer">
      <div class="MenuItem">
        <router-link to="/pehr-strand">Om Pehr Strand</router-link>
      </div>
      <div class="MenuItem">|</div>
      <div class="MenuItem">
        <router-link to="/om">Om forskningsprojektet</router-link>
      </div>
    </div>

    <div class="ornament laural"></div>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";

export default {
  name: "Title",
  computed: {
    isHomeChildPage() {
      return this.$route.matched.some((route) => route.path === "");
    },
  },
  mounted() {
    if (this.$route.hash) {
      VueScrollTo.scrollTo(this.$route.hash);
    }
  },
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
  margin: 0 10px;
  display: inline-block;
}
</style>
