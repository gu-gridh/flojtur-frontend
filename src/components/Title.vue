<template>
  <div>
    <div>
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
</style>
