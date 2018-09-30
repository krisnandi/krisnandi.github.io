<template>
  <div>
    <p v-if="isTrue">Anjash!</p>
  </div>
</template>

<script>
export default {
  props: ['isTrue'],
}
</script>
