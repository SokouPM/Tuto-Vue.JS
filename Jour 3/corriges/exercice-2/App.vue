<template>
  <p>Mon texte en gras : <span v-html="$boldText(text)"></span></p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: 'Mon super texte en gras !'
    }
  },
};
</script>

<style>
</style>
 