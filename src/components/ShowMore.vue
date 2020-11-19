<template>
  <aside>
    <TransitionExpand>
      <div v-show="!expanded">
        <span class="ActivateBonusMaterialText" @click="toggle">
          {{ label }}
        </span>
      </div>
    </TransitionExpand>

    <TransitionExpand>
      <div v-show="expanded" class="enclosure">
        <div class="deactivateBonusMaterial" @click="toggle"></div>

        <slot></slot>
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
.ActivateBonusMaterialText {
  margin-left: -10px;
}

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
