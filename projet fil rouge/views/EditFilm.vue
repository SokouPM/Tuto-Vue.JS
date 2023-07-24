<template>
  <div class="card" style="width: 50%;">
    <div class="card-body">
      <h4 class="card-title mb-3">Modifier le film :</h4>
    <GlobalFormFilm title-btn-form="Modifier ce film" v-bind="$props" @saveFilm="editFilm($event)"/>
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
    };
  },
  methods: {
    editFilm(valueFilm) {
      this.$emit("editFilm", { index: this.$route.params.id, film: valueFilm });
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