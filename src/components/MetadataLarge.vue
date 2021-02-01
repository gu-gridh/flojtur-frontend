<template>
  <div class="clearfix" style="margin-top: 40px">
    <dl
      v-for="(items, i) in chunk(metadataFiltered, 2)"
      :key="i"
      class="MetaContainerShort"
    >
      <div v-for="item in items" :key="item.label">
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
  props: ["metadata"],
  computed: {
    metadataFiltered() {
      return this.metadata.filter(({ value }) => value);
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
.MetaContainerShort {
  float: left;
  white-space: nowrap;
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
