<template>
  <table>
    <tr>
      <th>Prénom</th>
      <th>Nom</th>
      <th>Age</th>
    </tr>
    <tr v-for="(personne, index) in liste" :key="index">
      <td>{{ personne.prenom }}</td>
      <td>{{ personne.nom }}</td> 
      <td>{{ personne.age }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "ListInscrits",
  props: ['liste'],
};
</script>

<style>
</style>
