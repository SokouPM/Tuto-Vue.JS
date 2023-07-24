<template>
  <form>
    <div class="form-group">
      <label for="nom">Nom du film :</label>
      <input
        type="text"
        class="form-control"
        id="nom"
        v-model="film.nom"
        placeholder="Ajouter un nom"
        required
      />
    </div>

    <div class="form-group">
      <label for="sortie">Sortie du film :</label>
      <input
        type="number"
        class="form-control"
        id="sortie"
        v-model="film.sortie"
        placeholder="Sortie du film"
        required
      />
    </div>

    <div class="form-group">
      <label for="realisateur">Réalisateur du film :</label>
      <input
        type="text"
        class="form-control"
        id="realisateur"
        v-model="film.realisateur"
        placeholder="Ajouter un réalisateur"
        required
      />
    </div>

    <div class="form-group">
      <label>Catégorie :</label>
      <select v-model="film.categorie" class="form-control">
        <option value disabled selected hidden>Choisir une catégorie</option>
        <option :key="index" v-for="(categorie, index) in categories">{{ categorie }}</option>
      </select>
    </div>

    <div class="form-group">
      <input
        type="submit"
        class="btn btn-primary mb-2"
        :value="titleBtnForm"
        @click.prevent="saveFilm()"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "GlobalFormFilm",
  props: ["categories", "films", "titleBtnForm"],
  data() {
    return {
      film: {
        nom: "",
        sortie: "",
        realisateur: "",
        categorie: "",
      },
    };
  },
  created() {
    if (this.$route.params.id) {
      this.film = {
        nom: this.films[this.$route.params.id].nom,
        sortie: this.films[this.$route.params.id].sortie,
        realisateur: this.films[this.$route.params.id].realisateur,
        categorie: this.films[this.$route.params.id].categorie,
      }
    }
  },
  methods: {
    saveFilm() {
      if (this.film.nom == "" || this.film.sortie == "" || this.film.realisateur == "" || this.film.categorie == "") {
        alert('Merci de remplir tous les champs !')
      } else {
        this.$emit("saveFilm", this.film)
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