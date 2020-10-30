<template>
  <main>
    <Title />
    <div class="articleContainer">
      <div class="articleIngress">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est aut
        consequatur enim tempore perspiciatis fuga veniam explicabo harum
        laboriosam esse, exercitationem ab ad nostrum quas modi cum deleniti
        possimus!
      </div>
      <div class="articletext">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
          distinctio dolorum? Sapiente cupiditate corporis assumenda repellat
          reprehenderit itaque adipisci molestias dolorem excepturi dolor? Ex
          ratione quia, aut odio deserunt non.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illo
          totam veniam magni assumenda dolor natus omnis numquam, rerum sapiente
          similique quas nihil dignissimos eius aspernatur placeat earum eveniet
          facere.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam
          sit dicta alias ratione nihil ipsum doloremque repellat provident
          tempore minima cum, voluptas aut molestiae quo doloribus qui totam
          fugit.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import Title from "../components/Title";

export default {
  name: "About",
  components: { Title },
};
</script>

<style scoped>
main {
  margin-bottom: 5em;
}
</style>
