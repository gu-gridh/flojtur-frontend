<template>
  <div>
    <div class="container">
      <div class="ornament lyre"></div>
      <h1 id="site-title">
        <router-link to="/">Pehr Strands flöjtur</router-link>
      </h1>
      <div class="subtitle">1763–1810</div>
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
  font-size: 70px;
  text-align: center;
  margin: 20px 0 10px;
  padding-top: 0px;
  line-height: 0.9;
}

.subtitle {
  line-height: 1.5;
  text-align: center;
  font-size: 40px;
}

.ornament {
  margin: 0 auto;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &.lyre {
    background-image: url(../assets/topdetailwhite.png);
    height: 235px;
    max-height: 20vh;
    width: 205px;
    margin-top: 50px;
  }
  &.laural {
    background-image: url(../assets/lauraldetailwhite.png);
    height: 175px;
    width: 200px;
  }
}

@media screen and (min-width: 800px) {
  #site-title {
    font-size: 120px;
  }

  .subtitle {
    font-size: 60px;
  }
}
</style>
