<template>
  <dl>
    <div v-for="(item, i) in itemsFiltered" :key="i">
      <dt>{{ item.label }}:</dt>
      <dd v-if="item.href">
        <a :href="item.href">{{ item.value }}</a>
      </dd>
      <dd v-else>{{ item.value }}</dd>
    </div>
  </dl>
</template>

<script>
export default {
  name: "MetadataSmall",
  props: ["items"],
  computed: {
    itemsFiltered() {
      return this.items
        .map((item) => ({ ...item, value: item.value.replace(/^[-?]$/, "") }))
        .filter(({ value }) => value);
    },
  },
};
</script>

<style scoped>
dl {
  margin-top: 10px;
  column-count: 5;
  column-gap: 40px;
  font-size: 18px;
  line-height: 2;
  padding: 10px 0;
}

dt {
  display: inline;
}
dd {
  display: inline;
  margin-left: 0.2em;
  color: #fd8ef9;
}

@media screen and (max-width: 1600px) {
  dl {
    column-count: 4;
  }
}

@media screen and (max-width: 1200px) {
  dl {
    column-count: 3;
  }
}

@media screen and (max-width: 910px) {
  dl {
    column-count: 2;
  }
}

@media screen and (max-width: 610px) {
  dl {
    column-count: 1;
    font-size: 22px;
  }
}
</style>
