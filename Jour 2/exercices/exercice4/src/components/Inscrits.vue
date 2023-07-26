<script>

export default {
  name: "Inscrits",
  props: [
    'listInscrits'
  ],
}
</script>

<template>
  <h2>Liste des inscrit</h2>

  <table>
    <tr>
      <th>#</th>
      <th>Prénom</th>
      <th>Nom</th>
      <th>Age</th>
    </tr>
    <tr v-for="(personne, index) in listInscrits" :key="index">
      <td class="array-index">{{ index }}</td>
      <td>{{ personne.prenom }}</td>
      <td>{{ personne.nom }}</td>
      <td>{{ personne.age }}</td>
    </tr>
  </table>
</template>

<style scoped>
h2,
td {
  text-align: center;
}

table {
  margin: auto;
  width: 50%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 5px;
}

.array-index {
  font-weight: bold;
}
</style>