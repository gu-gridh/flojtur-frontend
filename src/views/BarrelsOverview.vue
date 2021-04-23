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
  width: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
