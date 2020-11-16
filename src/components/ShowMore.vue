<template>
  <aside>
    <span v-show="!expanded" class="ActivateBonusMaterialText" @click="toggle">
      {{ label }}
    </span>

    <div v-show="expanded" style="width: 100%">
      <div class="enclosure">
        <div
          class="deactivateBonusMaterial"
          id="CloseLongArticle"
          style="float: left; margin-left: -77px"
          @click="toggle"
        ></div>

        <slot></slot>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "ShowMore",
  props: {
    label: String,
  },
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
  position: relative;
  font-size: 47px;
  line-height: 0.7;
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
