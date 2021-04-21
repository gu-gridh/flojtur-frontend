<template>
  <div>
    <div>
      <div class="ornament lyre"></div>
      <h1 id="site-title">
        <router-link to="/">Pehr Strands flöjtur</router-link>
      </h1>
      <div class="subtitle">1763–1810</div>
    </div>

    <div id="ItemContainer">
      <div id="ItemLeft">
        <div class="articleIngress" style="font-size: 30px; text-align: right">
          Pehr Strand (c. 1758–1826) var orgel- och flöjtursbyggare i Stockholm
          kring sekelskiftet 1800. Denna webbportal är en redovisning av ett
          forskningsprojekt och samtidigt en källa till information om Pehr
          Strand och i synnerhet hans flöjtur.
        </div>
      </div>
      <div id="ItemRight" style="margin-top: 10px">
        <div class="articleIngress" style="text-align: left; font-size: 22px">
          Flöjtur är en klocka med ett mekaniskt spelverk som kan spela
          musikstycken programmerade på en stiftvals. Termen flöjtur anger också
          att tonen alstras med hjälp av pipor på samma sätt som i traditionella
          piporglar. I Sverige byggdes denna typ av flöjtur främst under andra
          hälften av 1700-talet och en bit in på 1800-talet, där Pehr Strand var
          en av de mest framgångsrika byggarna.
        </div>
      </div>
    </div>
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
  margin-top: 30px;
  padding-top: 0px;
}

.subtitle {
  line-height: 0.5;
  text-align: center;
  font-size: 60px;
}

.ornament {
  margin: 0 auto;
  background-size: cover;

  &.lyre {
    background-image: url(../assets/topdetailwhite.png);
    height: 235px;
    width: 205px;
    margin-top: 50px;
  }
  &.laural {
    background-image: url(../assets/lauraldetailwhite.png);
    height: 175px;
    width: 200px;
  }
}

#ItemContainer {
  width: 80%;
  height: auto;
  margin: 50px auto 0px;
  overflow: hidden;
}

#ItemLeft {
  width: 47.5%;
  height: auto;
  padding: 0px 30px 0px 0px;
  float: left;
  border-style: solid;
  border-width: 0px 0.5px 0px 0px;
}
#ItemRight {
  width: 45.5%;
  height: auto;
  margin-left: 30px;
  float: left;
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
  margin-left: 51%;
  padding-top: 30px;
  text-align: left;
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
  width: 580px;
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
