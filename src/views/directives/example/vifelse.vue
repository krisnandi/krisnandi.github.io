<template>
  <div>
    <p v-if="name === 'batman'">I am batman!</p>
    <p v-else-if="name === 'spiderman'">I am spiderman!</p>
    <p v-else>I am programmer!</p>
  </div>
</template>

<script>
export default {
  props: ['name'],
}
</script>
