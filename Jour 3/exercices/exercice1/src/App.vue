<script>
import counter from './mixins/counter';
import Counter1 from './components/Counter1.vue';
import CounterX from './components/CounterX.vue';

export default {
  name: 'App',
  mixins: [counter],
  components: {
    Counter1,
    CounterX,
  },
  data() {
    return {
      title: "Vuejs - Jour 3 / exercice 1",
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="counter-buttons">
    <Counter1 />
    <CounterX />
  </div>
</template>

<style scoped>
.counter-buttons {
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: auto;
}
</style>
