<script>
import counter from '../mixins/counter';

export default {
  name: 'Counter1',
  mixins: [counter],
}
</script>

<template>
  <div>
    <p v-if="(typeof counter) === 'number'">Compteur + 1 : {{ counter }}</p>
    <p v-else>Max</p>
    <button v-if="(typeof counter) === 'number'" @click="increment(1)">Ajouter + 1</button>
    <button v-else disabled>Max</button>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}
</style>