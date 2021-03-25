<template>
  <CardGrid
    v-if="barrels.length"
    :title="title"
    masonryId="barrels-masonry"
    :cards="cards"
  />
</template>

<script>
import CardGrid from "@/components/CardGrid.vue";

export default {
  name: "BarrelsCardGrid",
  props: ["barrels", "title"],
  components: { CardGrid },
  computed: {
    cards() {
      return this.barrels.map((barrel) => ({
        id: barrel.id,
        to: `/valsar/${barrel.id}`,
        image:
          barrel.photo &&
          `https://data.dh.gu.se/flojtur/300x/${barrel.photo.thumbnail}`,
        title: barrel.bar_title,
        content:
          barrel.music &&
          [barrel.music["comp.first_name"], barrel.music["comp.fam_name"]]
            .filter(Boolean)
            .join(" "),
      }));
    },
  },
};
</script>

<style>
</style>
