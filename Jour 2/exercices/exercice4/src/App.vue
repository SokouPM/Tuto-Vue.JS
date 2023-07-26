<script>
import Inscrits from "./components/Inscrits.vue";

export default {
  name: "App",
  components: {
    Inscrits
  },
  data() {
    return {
      title: "Vuejs - Jour 2 / exercice 4",
      listInscrits: [
        { nom: "Dupont", prenom: "Jean", age: 25 },
        { nom: "Durand", prenom: "Marie", age: 30 },
        { nom: "Martin", prenom: "Pierre", age: 20 },
        { nom: "Lefebvre", prenom: "Julie", age: 28 }
      ]
    };
  },
}
</script>

<template>
  <h1>{{ title }}</h1>
  <Inscrits :listInscrits="listInscrits" />
</template>

<style scoped></style>
