<script>
import MovieForm from "./components/movies/MovieForm.vue";
import MoviesList from "./components/movies/MoviesList.vue";
import CategoryForm from "./components/categories/CategoryForm.vue";
import CategoriesList from "./components/categories/CategoriesList.vue";
import { movies } from "./data/movies.js";
import { categories } from "./data/categories.js";

export default {
  name: "App",
  components: {
    MovieForm,
    MoviesList,
    CategoryForm,
    CategoriesList,
  },
  data() {
    return {
      title: `Jour 2 - Projet : Liste des films`,
      movies,
      categories,
      currentPage: "categories",
      indexOfMovieToModify: null,
      indexOfCategoryToModify: null,
      formMovieValues: {
        title: "",
        year: new Date().getFullYear(),
        director: "",
        category: "",
      },
      formCategoryValues: {
        name: "",
      },
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    addMovie(newMovie) {
      this.movies = [...this.movies, newMovie];
      this.formMovieValues = {
        title: "",
        year: new Date().getFullYear(),
        director: "",
        category: this.categories[0].name,
      };
    },
    editThisMovie(index) {
      this.indexOfMovieToModify = index;
      this.formMovieValues = this.movies[index];
    },
    updateMovies(updatedMovieValues) {
      this.movies[this.indexOfMovieToModify] = updatedMovieValues;
      this.indexOfMovieToModify = null;
      this.formMovieValues = {
        title: "",
        year: new Date().getFullYear(),
        director: "",
        category: this.categories[0].name,
      };
    },
    deleteMovie(index) {
      this.movies = this.movies.filter((movie, movieIndex) => movieIndex !== index);
    },
    addCategory(newCategory) {
      this.categories = [...this.categories, newCategory];
      this.formCategoryValues = {
        name: "",
      };
    },
    editThisCategory(index) {
      this.indexOfCategoryToModify = index;
      this.formCategoryValues = this.categories[index];
    },
    updateCategories(updatedCategoryValues) {
      this.categories[this.indexOfCategoryToModify] = updatedCategoryValues;
      this.indexOfCategoryToModify = null;
      this.formCategoryValues = {
        name: "",
      };
    },
    deleteCategory(index) {
      this.categories = this.categories.filter((category, categoryIndex) => categoryIndex !== index);
    },
  },
  beforeMount() {
    this.formMovieValues.category = this.categories[0].name;
  },
}
</script>

<template>
  <header>
    <h1>{{ title.toUpperCase() }}</h1>
    <nav>
      <a @click.prevent="changePage('movies')">Films</a>
      <a @click.prevent="changePage('categories')">Catégories</a>
    </nav>
  </header>

  <main>
    <CategoryForm v-if="currentPage === 'categories'" :categories="categories" :formCategoryValues="formCategoryValues"
      :indexOfCategoryToModify="indexOfCategoryToModify" @update:categories="updateCategories"
      @addCategory="addCategory" />
    <CategoriesList v-if="currentPage === 'categories'" :categories="categories"
      :indexOfCategoryToModify="indexOfCategoryToModify" @delete:category="deleteCategory"
      @edit:category="editThisCategory" />

    <MovieForm v-if="currentPage === 'movies'" :movies="movies" :formMovieValues="formMovieValues"
      :indexOfMovieToModify="indexOfMovieToModify" :categories="categories" @update:movies="updateMovies"
      @addMovie="addMovie" />
    <MoviesList v-if="currentPage === 'movies'" :movies="movies" :categories="categories"
      :indexOfMovieToModify="indexOfMovieToModify" @delete:movie="deleteMovie" @edit:movie="editThisMovie" />
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #24252A;
  color: #fff;
  padding: 0 20px;
  box-shadow: 0 0 10px #24252A;
  margin-bottom: 50px;
}

h1,
nav a {
  margin: 0;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
}

nav a {
  width: 200px;
  cursor: pointer;
  text-align: center;
  padding: 20px 0;
}

nav a:hover {
  background-color: #595b62;
}
</style>
