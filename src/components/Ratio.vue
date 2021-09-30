<template>
  <div class="ratio-outer" :style="{ paddingTop: 100 / Number(ratio) + '%' }">
    <div class="ratio-inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Ratio",
  props: ["ratio"],
};
</script>

<style scoped>
.ratio-outer {
  width: 100%;
  /* All paddings are relative to parent width. */
  /* Ratio by default, set ratio="" to override. */
  padding-top: 100%;
  position: relative;
}
.ratio-inner {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
