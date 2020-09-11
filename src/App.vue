<template>
  <div id="app">
    <Title />
    <ArchiveView />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import ArchiveView from "./components/ArchiveView.vue";

export default {
  name: "App",
  components: {
    Title,
    ArchiveView,
  },
};
</script>

<style>
#app {
}
</style>
