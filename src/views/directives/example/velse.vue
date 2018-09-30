<template>
  <div>
    <p v-if="isTrue">I am true!</p>
    <p v-else>I am false!</p>
  </div>
</template>

<script>
export default {
  props: ['isTrue'],
}
</script>
