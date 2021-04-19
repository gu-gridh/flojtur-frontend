<template>
  <div class="container">
    <BarrelsTable />
  </div>
</template>

<script>
import BarrelsTable from "@/components/BarrelsTable.vue";

export default {
  name: "BarrelsOverview",
  components: { BarrelsTable },
};
</script>

<style scoped>
.container {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
