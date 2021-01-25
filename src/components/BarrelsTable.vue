<template>
  <div class="barrels-table" :class="{ collapsed }">
    <div class="valstitles outset-small">
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

    <TransitionExpand v-for="(barrel, i) of barrelsSorted" :key="barrel.id">
      <div
        v-show="!collapsed || i < 4"
        class="valspost outset-small"
        :class="{ peek: i == 3 }"
      >
        <router-link :to="`barrel/${barrel.id}`" class="valspostitem valse">
          {{ barrel.label }}
        </router-link>
        <div class="valspostitem piece">{{ barrel.title }}</div>
        <div class="valspostitem composer">{{ barrel.composer }}</div>
        <div class="valspostitem link">{{ barrel.link }}</div>
      </div>
    </TransitionExpand>

    <span class="ActivateBonusMaterialText" @click="toggle">
      {{ collapsed ? "Visa alla valsar..." : "Visa färre valsar..." }}
    </span>
  </div>
</template>

<script>
import TransitionExpand from "./TransitionExpand.vue";

export default {
  name: "BarrelsTable",
  props: ["barrels"],
  components: { TransitionExpand },
  data() {
    return {
      sortField: "label",
      collapsed: true,
    };
  },
  computed: {
    barrelsSorted() {
      return this.barrels
        .map((barrel) => ({
          id: barrel.id,
          label: barrel.bar_title,
          title: barrel.music && barrel.music.title,
          composer:
            barrel.music &&
            `${barrel.music["comp.first_name"]} ${barrel.music["comp.fam_name"]}`,
          link: null,
        }))
        .sort((a, b) => this.compareText(a[this.sortField], b[this.sortField]));
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
    toggle() {
      this.collapsed = !this.collapsed;
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

  .collapsed &.peek {
    background: transparent
      linear-gradient(to bottom, white 0%, hsla(0 0 100% / 0) 50%);
    margin-bottom: -2em;

    .valspostitem {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 50%
      );
      background-clip: text;
      // -webkit-background-clip: text;
      color: transparent;
    }
  }
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

.ActivateBonusMaterialText {
  // Make sure the button stays over the half-visible peek item.
  position: relative;
  z-index: 10;
}
</style>
