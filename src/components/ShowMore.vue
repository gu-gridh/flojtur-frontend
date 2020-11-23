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
import TransitionExpand from "@/components/TransitionExpand";

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

<style scoped>
.deactivateBonusMaterial {
  float: left;
  margin-left: -77px;
  background: url(/interface/close.png);
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
}

.enclosure {
  margin-top: 10px;
}
</style>
