<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Photo</th>
      <th>Prénom nom</th>
      <th>Mail</th>
      <th>Ville</th>
    </tr>
    <tr v-for="(user, index) in donneesUsers" :key="index">
      <td>{{ index + 1 }}</td>
      <td><img :src="user.picture.thumbnail" :alt="`Photo ${user.name.last}`"></td>
      <td>{{ user.name.first }} {{ user.name.last }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.location.city }}</td>
    </tr>
  </table> 
</template>

<script>
export default {
  name: "ListUsers",
  props: ['donnees-users'],
};
</script>

<style scoped>
td {
  padding: 10px;
}
</style>
