<template>
  <aside :class="{ dark }">
    <TransitionExpand>
      <div v-show="!expanded" :class="{ container: dark }">
        <span class="ActivateBonusMaterialText" @click="toggle">
          {{ label }}
        </span>
      </div>
    </TransitionExpand>

    <TransitionExpand>
      <div v-show="expanded" class="enclosure">
        <div :class="{ container: dark }">
          <div class="deactivateBonusMaterial" @click="toggle"></div>
          <div :class="dark ? ['dark-plate', 'outset-large'] : []">
            <slot />
          </div>
        </div>
      </div>
    </TransitionExpand>
  </aside>
</template>

<script>
import TransitionExpand from "@/components/TransitionExpand.vue";

export default {
  name: "ShowMore",
  props: {
    label: String,
    dark: Boolean,
  },
  components: { TransitionExpand },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.deactivateBonusMaterial {
  float: left;
  margin-left: -77px;
  background: url(/interface/close.png);
  background-size: contain;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    margin-left: -65px;
  }

  @media screen and (max-width: 800px) {
    float: none;
    position: relative;
    top: 15px;
    height: 25px;
    width: 25px;
    margin-left: 0;
    .dark & {
      position: absolute;
      right: calc(5% + 5px);
      background-image: url(../assets/close-white.png);
    }
  }
}

.enclosure {
  margin-top: 10px;
}
</style>
