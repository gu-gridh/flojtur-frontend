<template>
  <div class="articlepage">
    <Title />
    <article class="articleContainer">
      <router-link to="/#menu-model" tag="div" id="ItemBack" />
      <h1>Versionshistorik</h1>
      <div class="articleIngress">
        <p>
          Uppdateringar av denna webbportal redovisas nedan. Korrektur redovisas
          inte, medan tillägg och visst löpande forskningsarbete. Till exempel
          identifiering av musikverk på stiftvalsarna, redovisas summariskt.
          Registrering av ytterligare flöjtur renderar en ny version: 1.1 etc.
        </p>

        <ul>
          <li>
            Version 1: (2021-09-30) publicering av version 1.
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  components: { Title },
};
</script>

<style></style>
