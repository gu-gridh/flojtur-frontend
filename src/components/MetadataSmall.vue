<template>
  <div class="metadata-small">
    <div v-for="(item, i) in itemsFiltered" :key="i" class="item">
      <span class="label">{{ item.label }}:</span>
      <a v-if="item.href" :href="item.href" class="value">{{ item.value }}</a>
      <span v-else class="value">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetadataSmall",
  props: ["items"],
  computed: {
    itemsFiltered() {
      return this.items
        .map((item) => ({
          ...item,
          value: item.value && item.value.replace(/^[-?]$/, ""),
        }))
        .filter(({ value }) => value);
    },
  },
};
</script>

<style scoped>
.metadata-small {
  margin-top: 10px;
  columns: 300px 5;
  column-gap: 40px;
  font-size: 18px;
  line-height: 1.5;
  padding: 10px 0;
}

.item {
  padding-bottom: 0.5em;
  break-inside: avoid;
}

.value {
  margin-left: 0.2em;
  color: #fd8ef9;
}

a.value {
  color: #90c3fd;
}

@media screen and (max-width: 610px) {
  .metadata-small {
    font-size: 22px;
  }
}
</style>
