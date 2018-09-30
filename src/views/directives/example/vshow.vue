<template>
  <div>
    <p v-show="isTrue">Anjash!</p>
  </div>
</template>

<script>
export default {
  props: ['isTrue'],
}
</script>
