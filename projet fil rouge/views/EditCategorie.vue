<template>
  <div class="card" style="width: 50%;">
    <div class="card-body">
      <h4 class="card-title mb-3">Modifier la catégorie :</h4>
      <GlobalFormCategorie title-btn-form="Modifier ma catégorie" v-bind="$props" @saveCat="editCat($event)" />
    </div>
  </div>
</template>

<script>
import GlobalFormCategorie from '@/components/GlobalFormCategorie.vue'
export default {
  name: "EditCategorie",
  components: {
    GlobalFormCategorie
  },
  props: ["categories"],
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
    editCat(categorie) {
      this.$emit("editCat", { index: this.$route.params.id, categorie: categorie });
      this.$router.push({ name: "GestionCategories" });
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