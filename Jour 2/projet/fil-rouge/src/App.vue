<template>
  <div class="container">
    <nav>
      <ul class="nav justify-content-center">
        <li class="nav-item"> 
          <router-link class="nav-link" :to="{name:'Accueil'}">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  :to="{name:'GestionFilm'}">Ajouter un film</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  :to="{name:'GestionCategorie'}">Ajouter une catégorie</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>

</style>
