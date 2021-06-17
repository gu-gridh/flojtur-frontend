<template>
  <iframe
    src="https://strand.dh.gu.se/admin"
    :scrolling="scrollable ? 'auto' : 'no'"
    :class="{ scrollable: scrollable }"
  />
</template>

<script>
// Only let the iframe be scrollable when the main page has been scrolled to the bottom.
export default {
  name: "AdvancedSearch",
  data() {
    return {
      // Must be initially true, because Safari ignores dynamic modification of the scrolling attribute.
      scrollable: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScrollable);
  },
  unmounted() {
    window.removeEventListener("scroll", this.updateScrollable);
  },
  methods: {
    /** Set whether the iframe can be scrolled or not. */
    updateScrollable() {
      this.scrollable = this.isScrolledToBottom();
    },
    /** Whether the main page is scrolled to the bottom. */
    isScrolledToBottom: () =>
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight,
  },
};
</script>

<style lang="scss" scoped>
iframe {
  height: calc(100vh - 5em);
  width: 100%;
  border: 0;
  overflow: hidden;

  &.scrollable {
    overflow: auto;
  }
}
</style>
