<template>
  <div v-html="input" />
</template>

<script>
export default {
  name: 'vText',
  props: ['input'],
}
</script>
