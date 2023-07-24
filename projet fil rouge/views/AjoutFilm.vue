<template>
  <div class="card" style="width: 50%;">
    <div class="card-body">
      <h4 class="card-title mb-3">Ajouter un film :</h4>
    <GlobalFormFilm title-btn-form="Ajouter ce film" v-bind="$props" @saveFilm="addFilm($event)"/>
    </div>
  </div>
</template>

<script>
import GlobalFormFilm from '@/components/GlobalFormFilm.vue'
export default {
  name: "AjoutFilm",
  props: ["categories", "films"],
  components: {
    GlobalFormFilm
  },
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
  methods: {
    addFilm(valueFilm) {
      this.$emit("ajoutFilm", valueFilm);
      this.$router.push({ name: "Home" });
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