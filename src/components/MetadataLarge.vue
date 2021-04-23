<template>
  <div v-if="items" class="metadata-large clearfix">
    <dl
      v-for="(itemsChunk, i) in chunk(itemsFiltered, 2)"
      :key="i"
      class="MetaContainerShort"
    >
      <div v-for="item in itemsChunk" :key="item.label">
        <dt>{{ item.label }}:</dt>
        <dd v-if="item.href">
          <a :href="item.href">{{ item.value }}</a>
        </dd>
        <dd v-else>{{ item.value }}</dd>
      </div>
    </dl>
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

<style scoped>
.metadata-large {
  margin-top: 40px;
  margin-right: -40px;
}
.MetaContainerShort {
  float: left;
  width: auto;
  margin: 0px 50px 0 0;
  font-weight: 100;
  line-height: 2;
}

dt {
  display: inline;
}
dd {
  display: inline;
  margin-left: 0.2em;
  color: #c029bb;
}
</style>
