<template>
  <div>
    <div class="links">
      <div class="ArchiveViewOptions">
          <router-link to="/"
          class="viewOption"
          >Galleri</router-link>
        <div class="viewOption">|</div>
        <router-link
        class="viewOption" to="/map">Karta</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "ArchiveView",
};
</script>

<style scoped>
.links {
  height: 100px;
  width: 100%;
  margin-top: 10px;
}
.ArchiveViewOptions {
  width: 360px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  text-align: center;
}
.viewOption {
  display: inline-block;
  width: auto;
  font-size: 20px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
  transition: all 0.2s;
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
