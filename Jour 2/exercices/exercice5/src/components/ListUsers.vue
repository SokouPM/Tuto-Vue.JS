<script>

export default {
  name: "ListUsers",
  props: [
    'data',
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
    <tr v-for="(user, index) in data" :key="index">
      <td class="array-index">{{ index }}</td>
      <td>{{ user.name.first }}</td>
      <td>{{ user.name.last }}</td>
      <td>{{ user.dob.age }}</td>
    </tr>
  </table>
</template>

<style scoped>
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