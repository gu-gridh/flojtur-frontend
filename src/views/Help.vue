<template>
  <main>
    <Title />
    <div class="articleContainer">
      <div class="articleIngress">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime
        delectus aliquam corrupti nemo ut, error facere molestiae dicta esse
        reiciendis itaque maiores ea! Pariatur dignissimos tempora ex vero quos?
      </div>
      <div class="articletext">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non
          molestias cum officiis, modi, reiciendis aliquam voluptatibus vel vero
          consequatur quasi beatae repellendus? Eos nemo adipisci est ipsam,
          tempora ad?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          sapiente, provident fugiat ea totam facilis modi et quos quis iusto
          non laboriosam dolorem possimus veritatis pariatur voluptate libero
          itaque dolorum.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "Help",
  components: { Title },
};
</script>

<style scoped>
main {
  margin-bottom: 5em;
}
</style>
