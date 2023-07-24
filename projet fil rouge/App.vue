<template>
  <main>
    <MenuHeader />
    <router-view
      :films="films"
      :categories="categories"
      @removedFilm="confirmedDeleteFilm($event)"
      @removedCategorie="confirmedDeleteCategorie($event)"
      @ajoutFilm="addNewFilm($event)"
      @editFilm="editFilm($event)"
      @ajoutCategorie="ajoutCategorie($event)"
      @editCat="editCat($event)"
    />
  </main>
</template>

<script>
import MenuHeader from "@/components/MenuHeader.vue";
export default {
  name: "App",
  components: {
    MenuHeader,
  },
  data() {
    return {
      films: [
        {
          nom: "Gladiator",
          sortie: "2000",
          realisateur: "Ridley Scott",
          categorie: "Action",
        },
        {
          nom: "Avatar",
          sortie: "2009",
          realisateur: "James Cameron",
          categorie: "Science fiction",
        },
      ],
      categories: [
        "Action",
        "Science fiction",
        "Horreur",
        "Aventure",
        "Policier",
      ],
    };
  },
  methods: {
    confirmedDeleteFilm(film) {
      this.films.splice(film, 1);
    },
    confirmedDeleteCategorie(categorie) {
      this.categories.splice(categorie, 1);
    },
    addNewFilm(film) {
      this.films.push(film);
    },
    editFilm(film) {
      this.films[film.index] = film.film;
    },
    ajoutCategorie(categorie) {
      this.categories.push(categorie);
    },
    editCat(categorie) {
      this.categories[categorie.index] = categorie.categorie;
    },
  },
};
</script>

<style>
main {
  margin: 20px;
}
</style>
