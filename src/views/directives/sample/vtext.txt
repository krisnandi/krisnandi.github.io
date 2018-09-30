<template>
  <div>
    use bracket:
    <div>{{ name }}</div>
    use v-text:
    <div v-text="name" />
  </div>
</template>

<script>
export default {
  name: 'vText',
  props: ['name'],
}
</script>
