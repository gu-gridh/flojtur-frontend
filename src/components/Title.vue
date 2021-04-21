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
        <div class="articleIngress">
          Pehr Strand (c. 1758–1826) var orgel- och flöjtursbyggare i Stockholm
          kring sekelskiftet 1800. Denna webbportal är en redovisning av ett
          forskningsprojekt och samtidigt en källa till information om Pehr
          Strand och i synnerhet hans flöjtur.
        </div>
      </div>
      <div id="ItemRight">
        <div class="articleIngress">
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
  margin-top: 10px;
  margin-left: 30px;
  float: left;
}

.articleIngress {
  columns: 1;
  line-height: 1.2;

  #ItemLeft & {
    font-size: 30px;
    text-align: right;
  }

  #ItemRight & {
    text-align: left;
    font-size: 22px;
  }
}
</style>
