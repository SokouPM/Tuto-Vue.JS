<script>
export default {
  name: "CategoriesList",
  props: [
    "categories",
    "indexOfCategoryToModify",
  ],
  methods: {
    // Choosen category to edit
    editThisCategory(index) {
      this.$emit("edit:category", index);
    },

    deleteCategory(index) {
      this.$emit("delete:category", index);
    },
  },
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th class="col-1">#</th>
        <th>Nom de la catégorie</th>
        <th colspan="2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(category, index) in categories" :key="index">
        <td class="col-1">{{ index }}</td>
        <td class="col-2">{{ category.name }}</td>
        <td class="col-3">
          <button v-if="indexOfCategoryToModify === index" class="btn btn-disabled">Modifier</button>
          <button v-else class="btn btn-blue" @click="editThisCategory(index)">Modifier</button>
        </td>
        <td class="col-4">
          <button class="btn btn-red" @click="deleteCategory(index)">Supprimer</button>
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
  width: 50%;
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

td.col-3,
td.col-4 {
  width: 15%;
}
</style>
