<script>
import counter from '../mixins/counter';

export default {
  name: 'CounteX',
  mixins: [counter],
}
</script>

<template>
  <div>
    <p v-if="(typeof counter) === 'number'">Compteur + X : {{ counter }}</p>
    <p v-else>Max</p>
    <button v-if="(typeof counter) === 'number'" @click="increment(counter || 1)">Ajouter + {{ counter || 1 }}</button>
    <button v-else disabled>Max</button>
  </div>
</template>

<style scoped>
div {
  text-align: center;
}

button:disabled {
  cursor: not-allowed;
}
</style>