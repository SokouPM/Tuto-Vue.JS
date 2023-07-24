<template>
  <div class="card" style="width: 50%;">
    <div class="card-body">
      <h4 class="card-title mb-3">Gérer les catégories de film :</h4>

      <table>
        <tr>
          <th>Nom de la catégorie</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(categorie, index) in categories" :key="index">
          <td>{{ categorie }}</td>
          <td>
            <button @click="deleteCategorie(index)" class="mx-1">supprimer</button>
            <button @click="editCategorie(index)" class="mx-1">modifier</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GestionCategories",
  props: ["categories"],
  methods: {
    deleteCategorie(categorie) {
      const deleteConfirm = confirm(
        "Etes-vous certain de vouloir la supprimer ?"
      );
      if (deleteConfirm) {
        this.$emit('removedCategorie', categorie);
      }
    },
    editCategorie(categorie) {
      this.$router.push({ name: 'EditCategorie', params: { id: categorie } });
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