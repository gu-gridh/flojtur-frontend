<template>
  <div>
    <div class="links">
      <div class="ArchiveViewOptions">
        <router-link to="/" class="viewOption">Galleri</router-link>
        <div class="viewOption">|</div>
        <router-link class="viewOption" to="/map">Karta</router-link>
        <div class="viewOption">|</div>
        <router-link class="viewOption" to="/barrels">Stiftvalsar</router-link>
        <div class="viewOption">|</div>
        <a
          href="https://strand.dh.gu.se/admin/"
          target="_blank"
          class="viewOption"
        >
          Avancerad sökning
        </a>
      </div>
    </div>

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { getBarrels } from "../assets/db";

export default {
  name: "ArchiveView",
  created() {
    // Pre-load data.
    getBarrels();
  },
};
</script>

<style scoped>
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
