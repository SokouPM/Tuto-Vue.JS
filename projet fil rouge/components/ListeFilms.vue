<template>
  <div class="card" style="width: 50%;">
    <div class="card-body">
      <h4 class="card-title mb-3">Les films disponibles :</h4>
      <table style="width: 100%;">
        <tr>
          <th>Nom</th>
          <th>Année</th>
          <th>Réalisateur</th>
          <th>Catégorie</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(film, index) in films" :key="index">
          <td>{{ film.nom }}</td>
          <td>{{ film.sortie }}</td>
          <td>{{ film.realisateur }}</td>
          <td>{{ film.categorie }}</td>
          <td>
            <button @click="deleteFilm(index)" class="mx-1">supprimer</button>
            <button @click="editFilm(index)" class="mx-1">modifier</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListeFilms",
  props: ["films"],
  methods: {
    deleteFilm(film) {
      const deleteConfirm = confirm(
        "Etes-vous certain de vouloir le supprimer ?"
      );
      if (deleteConfirm) {
        this.$parent.$emit('removedFilm', film);
      }
    },
    editFilm(film) {
      this.$router.push({ name: 'EditFilm', params: { id: film } });
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
td,
th {
  padding: 10px;
  border: 1px solid black;
  text-align: center;
}
</style>