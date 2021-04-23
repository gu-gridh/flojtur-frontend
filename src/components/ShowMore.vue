<template>
  <aside>
    <TransitionExpand>
      <div v-show="!expanded" :class="{ container: contain }">
        <span class="ActivateBonusMaterialText" @click="toggle">
          {{ label }}
        </span>
      </div>
    </TransitionExpand>

    <TransitionExpand>
      <div v-show="expanded" class="enclosure">
        <div :class="{ container: contain }">
          <div class="deactivateBonusMaterial" @click="toggle"></div>
          <slot></slot>
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
    /** Whether to add a .container div wrapping the content. */
    contain: Boolean,
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
    position: absolute;
    top: 15px;
    right: 15px;
    height: 25px;
    width: 25px;
    margin-left: 0;
    background-image: url(../assets/close-white.png);
    .container > & {
      right: calc(5% + 5px);
    }
  }
}

.enclosure {
  margin-top: 10px;
}
</style>
