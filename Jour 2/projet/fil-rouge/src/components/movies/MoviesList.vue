<script>
export default {
  name: "MoviesList",
  props: [
    "movies",
    "indexOfMovieToModify"
  ],
  methods: {
    // Choosen movie to edit
    editThisMovie(index) {
      this.$emit("edit:movie", index);
    },

    deleteMovie(index) {
      this.$emit("delete:movie", index);
    },
  },
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th class="col-1">#</th>
        <th class="col-2">Titre du film</th>
        <th class="col-3">Année de sortie</th>
        <th class="col-4">Réalisateur</th>
        <th class="col-5">Catégorie</th>
        <th colspan="2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(movie, index) in movies" :key="index">
        <td class="col-1">{{ index }}</td>
        <td class="col-2">{{ movie.title }}</td>
        <td class="col-3">{{ movie.year }}</td>
        <td class="col-4">{{ movie.director }}</td>
        <td class="col-5">{{ movie.category }}</td>
        <td class="col-6">
          <button v-if="indexOfMovieToModify === index" class="btn btn-disabled">Modifier</button>
          <button v-else class="btn btn-blue" @click="editThisMovie(index)">Modifier</button>
        </td>
        <td class="col-7">
          <button class="btn btn-red" @click="deleteMovie(index)">Supprimer</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  box-shadow: 2px 2px 10px #24252a68;
  border-radius: 0.25rem;
  overflow: hidden;
}

table thead {
  background-color: #24252A;
  color: #fff;
}

table thead tr th {
  font-weight: bold;
  padding: 15px 0.5rem;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tbody tr td button {
  width: 100%;
  padding-left: 0;
}

td.col-1 {
  width: 5%;
  border-right: 1px solid #ccc;
}

td.col-3 {
  width: 20%;
}
</style>
