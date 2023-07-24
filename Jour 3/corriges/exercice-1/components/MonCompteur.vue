<template>
  <p>Mon compteur :</p>
  <button @click="incrementationValue(2)">{{ incrementation }}</button>
</template>

<script>
import incrementationValue from '@/mixins/incrementationValue.js';

export default {
    name: "MonCompteur",
    mixins: [incrementationValue],
}
</script>

<style>

</style> 