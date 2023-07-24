<template>
  <h1>Liste des inscrits :</h1>
  <ListUsers :donnees-users="donnees"/>
</template>

<script>
import ListUsers from './components/ListUsers.vue'

export default {
  name: 'App',
  components: {
    ListUsers
  },
  data() {
    return {
      donnees: [] 
    }
  },
  created() {
    this.axios.get('https://randomuser.me/api/?results=10')
    .then((users) => {
      this.donnees = users.data.results;
    }).catch((err) => {
      console.log(err);
    });
  },
}
</script>

<style>
</style>
