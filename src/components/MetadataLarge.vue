<template>
  <div v-if="items" class="metadata-large clearfix">
    <div
      v-for="(itemsChunk, i) in chunk(itemsFiltered, 2)"
      :key="i"
      class="MetaContainerShort"
    >
      <div v-for="item in itemsChunk" :key="item.label" class="item">
        <span class="label">{{ item.label }}:</span>
        <a v-if="item.href" :href="item.href" class="value">{{ item.value }}</a>
        <span v-else class="value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetadataLarge",
  props: ["items"],
  computed: {
    itemsFiltered() {
      return this.items
        .map((item) => ({
          ...item,
          value: item.value && String(item.value).replace(/^[-?]$/, ""),
        }))
        .filter(({ value }) => value);
    },
  },
  methods: {
    chunk(list, n = 1) {
      const size = Math.ceil(list.length / n);
      return [...Array(n)].map((_, i) => list.slice(i * size, (i + 1) * size));
    },
  },
};
</script>

<style lang="scss" scoped>
$gap: 50px;

.metadata-large {
  margin-top: 40px;
  margin-left: -$gap;
}

.MetaContainerShort {
  float: left;
  margin-left: $gap;
  font-weight: 300;
  line-height: 1.5;
}

@media screen and (min-width: 800px) {
.MetaContainerShort {

  font-weight: 100;

}
}

.item {
  padding-bottom: 0.5em;
}

.value {
  margin-left: 0.2em;
  color: #c029bb;
}
</style>
