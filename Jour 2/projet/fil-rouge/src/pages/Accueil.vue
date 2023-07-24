<template>
    <header>
      <h1>Liste des films enregistrés</h1>
    </header>
    <main>
      <ListFilms :films="films" :categories="categories"/>
      <button class="btn btn-primary" @click="ajoutFilm()">Ajouter un film</button>
    </main>
  </template>

<script>

import ListFilms from '@/components/ListFilms.vue'

export default {
    name: 'Accueil',
    created(){
    if(!localStorage.getItem('films')){
      localStorage.setItem('films', JSON.stringify(this.films))
    }else{
      this.films = JSON.parse(localStorage.getItem('films'))
    }

    if(!localStorage.getItem('categories')){
      localStorage.setItem('categories', JSON.stringify(this.categories))
    }else{
      this.categories = JSON.parse(localStorage.getItem('categories'))
    }
  },
  components:{
    ListFilms
  },
  methods:{
    ajoutFilm(){
      this.$router.push({name:'GestionFilm'})
    },
    receiveForm(data){
      console.log(data)
    }
  },
  data(){
    return {
      films : [
          {
            id: 1,
              nom: 'LOTR',
              real: 'Peter Jackson',
              annee: 2001,
              categorie:1
          },
          {
            id: 2,
              nom: 'Matrix',
              real: 'Frères Wachowski',
              annee: 2001,
              categorie:4
          }
      ],
      categories : [
          {id:1,lib:'Fantasy'}, 
          {id:2,lib:'Action'}, 
          {id:3,lib:'Thriller'},
          {id:4,lib:'SF'}
      ]
    }
  }
}

</script>

<style>

</style>