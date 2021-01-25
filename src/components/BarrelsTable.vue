<template>
  <div class="barrels-table">
    <div class="valstitles">
      <div
        class="valspostitem valse sortable"
        :class="{ 'sort-active': sortField === 'label' }"
        @click="sortBy('label')"
      >
        Vals
      </div>
      <div
        class="valspostitem piece sortable"
        :class="{ 'sort-active': sortField === 'title' }"
        @click="sortBy('title')"
      >
        Musikstycke
      </div>
      <div
        class="valspostitem composer sortable"
        :class="{ 'sort-active': sortField === 'composer' }"
        @click="sortBy('composer')"
      >
        Komposit&ouml;r
      </div>
      <div class="valspostitem link">Extern l&auml;nk</div>
    </div>

    <div v-for="barrel of barrelsSorted" :key="barrel.id" class="valspost">
      <router-link :to="`barrel/${barrel.id}`" class="valspostitem valse">
        {{ barrel.label }}
      </router-link>
      <div class="valspostitem piece">{{ barrel.title }}</div>
      <div class="valspostitem composer">{{ barrel.composer }}</div>
      <div class="valspostitem link">{{ barrel.link }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarrelsTable",
  props: ["barrels"],
  data() {
    return {
      sortField: "label",
    };
  },
  computed: {
    barrelsValues() {
      return this.barrels.map((barrel) => ({
        id: barrel.id,
        label: barrel.bar_title,
        title: barrel.music && barrel.music.title,
        composer:
          barrel.music &&
          `${barrel.music["comp.first_name"]} ${barrel.music["comp.fam_name"]}`,
        link: null,
      }));
    },
    barrelsSorted() {
      return [...this.barrelsValues].sort((a, b) =>
        this.compareText(a[this.sortField], b[this.sortField])
      );
    },
  },
  methods: {
    sortBy(field) {
      this.sortField = field;
    },
    /** A text comparator that handles åäö and empty strings. */
    compareText(a, b) {
      return a ? a.localeCompare(b || "", "sv") : 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.barrels-table {
  margin-top: 20px;
}

.valspost {
  display: flex;
  align-items: center;
  font-size: 22px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: white;
}

.valstitles {
  display: flex;
  font-size: 22px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.valspostitem {
  height: 100%;
  width: auto;
  padding: 30px;
  box-sizing: border-box;

  .valstitles & {
    padding: 0px 30px;
    border-width: 0px;
  }
}

.sortable {
  cursor: pointer;
}

.sort-active {
  text-decoration: underline;
}

.valse {
  width: 30%;
}

.piece {
  width: 25%;
}

.composer {
  width: 25%;
}
</style>
