<template>
  <a :href="url" :class="{ long: isLong }">{{ url }}</a>
</template>

<script>
export default {
  name: "UrlLink",
  props: { url: String },
  computed: {
    isLong() {
      return this.url.length > 50;
    },
  },
};
</script>

<style>
.long {
  word-break: break-all;
  hyphens: none;
}
</style>
