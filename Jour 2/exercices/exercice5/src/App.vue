<script>
import ListUsers from "./components/ListUsers.vue";

export default {
  name: "App",
  components: {
    ListUsers
  },
  data() {
    return {
      title: "Vuejs - Jour 2 / exercice 5",
      loading: false,
      data: []
    };
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      this.axios.get('https://randomuser.me/api/?results=10')
        .then(
          (response) => {
            this.data = response.data.results;
          }
        ).catch(
          (error) => console.error(error)
        );
      this.loading = false;
    }, 2000);
  },
}
</script>

<template>
  <h1>{{ title }}</h1>
  <ListUsers v-if="!loading && data" :data="data" />
  <img v-else src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="">
</template>

<style scoped>
img {
  display: block;
  margin: auto;
  width: 20%;
}
</style>
