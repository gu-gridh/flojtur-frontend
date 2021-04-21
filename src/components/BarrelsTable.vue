<template>
  <div v-if="barrels" class="barrels-table" :class="{ collapsed }">
    <div class="valstitles">
      <div
        class="valspostitem valse sortable"
        :class="{ 'sort-active': sortField === 'label' }"
        @click="sortBy('label')"
      >
        Originaltitel
      </div>
      <div
        class="valspostitem composer sortable"
        :class="{ 'sort-active': sortField === 'composer' }"
        @click="sortBy('composer')"
      >
        Komposit&ouml;r
      </div>
      <div
        class="valspostitem piece sortable"
        :class="{ 'sort-active': sortField === 'title' }"
        @click="sortBy('title')"
      >
        Musikstycke
      </div>
    </div>

    <TransitionExpand v-for="(barrel, i) of barrelsSorted" :key="barrel.id">
      <router-link
        tag="div"
        :to="`valsar/${barrel.id}`"
        v-show="!collapsed || i < 4"
        class="valspost"
        :class="{ peek: i == 3 }"
      >
        <div class="valspostitem valse">{{ barrel.label }}</div>
        <div class="valspostitem composer">{{ barrel.composer }}</div>
        <div class="valspostitem piece">{{ barrel.title }}</div>
      </router-link>
    </TransitionExpand>

    <!-- <span class="ActivateBonusMaterialText" @click="toggle">
      {{ collapsed ? "Visa alla valsar..." : "Visa färre valsar..." }}
    </span> -->
  </div>
</template>

<script>
import { getBarrels } from "@/assets/db";
import TransitionExpand from "@/components/TransitionExpand.vue";

export default {
  name: "BarrelsTable",
  components: { TransitionExpand },
  data() {
    return {
      barrels: [],
      sortField: "label",
      collapsed: false,
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
            [barrel.music["comp.first_name"], barrel.music["comp.fam_name"]]
              .filter(Boolean)
              .join(" "),
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
      return a && b
        ? a.localeCompare(b, "sv", { ignorePunctuation: true })
        : !a - !b;
    },
    toggle() {
      this.collapsed = !this.collapsed;
    },
  },
  async created() {
    this.barrels = await getBarrels();
  },
};
</script>

<style lang="scss" scoped>
.barrels-table {
  margin-top: 0px;
  padding: 0px 10px;
  width: 100%;
}

.valspost {
  display: flex;
  align-items: center;
  font-size: 22px;
  border-radius: 0px;
  background-color: rgb(85 85 85);
  color: white;
  cursor: pointer;
  border-style: solid;
  border-width: 0 0 0px 0;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2),
    0 6px 40px 0 rgba(0, 0, 0, 0.19);

  .collapsed &.peek {
    background: transparent
      linear-gradient(to bottom, white 0%, hsla(0 0% 100% / 0) 50%);
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
.valspost:hover {
  background-color: rgb(75 75 75);
  transform: scale(1.005);
}

.valstitles {
  display: flex;
  font-size: 22px;
  border-radius: 15px 15px 0px 0px;
  background-color: rgb(85 85 85);
  color: white;
  font-weight: 300;
  padding: 20px 0px 20px 0px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2),
    0 6px 40px 0 rgba(0, 0, 0, 0.19);
}

.valspostitem {
  height: 100%;
  width: auto;
  padding: 25px;

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
  text-decoration: none;
  font-weight: 600;
}

.valse {
  width: 50%;
}

.piece {
  width: 30%;
}

.composer {
  width: 20%;
  border-width: 0 0.5px 0px 0.5px;
  border-style: solid;
  border-color: #999999;
  // More margin, less padding, to fix border lengths.
  margin-block: 10px;
  padding-block: 15px;
}

.ActivateBonusMaterialText {
  // Make sure the button stays over the half-visible peek item.
  position: relative;
  z-index: 10;
}
</style>
