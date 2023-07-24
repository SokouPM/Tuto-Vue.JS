<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}">Annuaire films</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'AjoutFilm'}">Ajouter un film</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'AjoutCategorie'}">Ajouter une categorie</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'GestionCategories'}">Gérer les catégories</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MenuHeader'
}
</script>

<style scoped>
a.nav-link.router-link-active,
a.nav-link.router-link-active:hover,
a.nav-link.router-link-active:focus {
  color: rgba(47, 127, 167, 0.9);
  font-weight: 600;
}
</style>