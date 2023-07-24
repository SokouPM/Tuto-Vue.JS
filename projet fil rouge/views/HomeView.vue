<template>
  <div>
    <h2 class="my-4">Bienvenue sur mon annuaire de films !</h2>

    <ListeFilms v-bind="$props" />
  </div>
</template>

<script>
import ListeFilms from "@/components/ListeFilms.vue";

export default {
  name: "HomeView",
  components: {
    ListeFilms,
  },
  props: ['films', 'categories'],
};
</script>

<style>
</style>