<template>
  <footer id="footer">
    <div class="container">
      <div>
        <router-link to="/"> Pehr Strands flöjtur</router-link>
      </div>
      <div>
        <router-link to="/om">Om forskningsprojektet</router-link>
      </div>
    </div>

    <div class="container">
      <div>Citera:</div>
      <div>
        Norrback, J. (2021). <em>Pehr Strands spelur</em>. Centrum för digital
        humaniora, Göteborgs universitet. https://strand.dh.gu.se/
      </div>
    </div>

    <div class="container">
      <div>
        Licens:
        <a href="https://creativecommons.org/licenses/by-nc/4.0/"
          >CC BY-NC 4.0</a
        >, om inget annat anges
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #222;
  color: white;
  padding-block: 2.5rem;
  line-height: 1.3;
}
.container:not(:last-child) {
  padding-bottom: 1rem;
}
</style>
