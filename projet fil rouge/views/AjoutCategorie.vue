<template>
  <div class="card" style="width: 50%;">
    <div class="card-body">
      <h4 class="card-title mb-3">Ajouter une catégorie :</h4>
      <GlobalFormCategorie
        title-btn-form="Ajouter ma catégorie"
        v-bind="$props"
        @saveCat="addCat($event)"
      />
    </div>
  </div>
</template>

<script>
import GlobalFormCategorie from '@/components/GlobalFormCategorie.vue'
export default {
  name: "AjoutCategorie",
  components: {
    GlobalFormCategorie
  },
  props: ["categories"],
  data() {
    return {
      categorie: ''
    };
  },
  methods: {
    addCat(categorie) {
      this.$emit("ajoutCategorie", categorie);
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