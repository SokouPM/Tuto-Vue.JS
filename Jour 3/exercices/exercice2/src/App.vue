<script>

export default {
  name: 'App',
  data() {
    return {
      title: "Vuejs - Jour 3 / exercice 2",
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <p>Le texte en gras : <span v-html="$bolderText('React my love 💘')"></span></p>
</template>

<style scoped></style>
