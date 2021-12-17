<template>
  <div>
    <Title />
    <ArchiveView />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import ArchiveView from "@/components/ArchiveView.vue";

export default {
  name: "Home",
  components: {
    Title,
    ArchiveView,
  },
  mounted() {
    document.title = "Pehr Strands flöjtur";
  },
};
</script>
