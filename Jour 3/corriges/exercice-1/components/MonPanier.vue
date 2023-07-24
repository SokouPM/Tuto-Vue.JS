<template>
  <p>Mon panier :</p>
  <button @click="incrementationValue(4)">{{ incrementation }}</button>
</template>

<script>
import incrementationValue from '@/mixins/incrementationValue.js';

export default {
    name: "MonPanier",
    mixins: [incrementationValue],
}
</script>

<style>

</style> 