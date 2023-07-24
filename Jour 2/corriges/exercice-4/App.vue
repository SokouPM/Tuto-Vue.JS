<template>
  <h1>Liste des inscrits :</h1>
  <ListInscrits :liste="personnes"/>
</template>

<script>
import ListInscrits from './components/ListInscrits.vue'

export default {
  name: 'App',
  components: {
    ListInscrits
  },
  data() {
    return {
      personnes: [ 
        {prenom: 'John', nom: 'Duje', age: 40},
        {prenom: 'Maxime', nom: 'Dupuis', age: 22},
        {prenom: 'Yohan', nom: 'Carry', age: 37},
        {prenom: 'Pierre', nom: 'Petit', age: 47},
      ]
    }
  },
}
</script>

<style>
</style>
