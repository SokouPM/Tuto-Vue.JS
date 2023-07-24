<template>
  <form>
    <div class="form-group">
      <label for="nom">Nom de la catégorie :</label>
      <input
        type="text"
        class="form-control"
        id="categorie"
        v-model="categorie"
        placeholder="Ajouter une catégorie"
        required
      />
    </div>

    <div class="form-group">
      <input
        type="submit"
        class="btn btn-primary mb-2"
        :value="titleBtnForm"
        @click.prevent="saveCat()"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "GlobalFormFilm",
  props: ["categories", "titleBtnForm"],
  data() {
    return {
      categorie: ""
    };
  },
  created() {
    if (this.$route.params.id) {
      this.categorie = this.categories[this.$route.params.id]
    }
  },
  methods: {
    saveCat() {
      if (this.categorie == "") {
        alert('Merci de remplir le champ !')
      } else {
        this.$emit("saveCat", this.categorie)
      }
    },
  },
};
</script>

<style scoped>
div {
  margin: 10px;
}
label {
  margin-right: 10px;
}
</style>