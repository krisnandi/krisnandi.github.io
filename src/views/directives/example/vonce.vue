<template>
  <div>
    with v-once:
    <div v-once>{{ input }}</div>
    without v-once:
    <div>{{ input }}</div>
  </div>
</template>

<script>
export default {
  name: 'vText',
  props: ['input'],
}
</script>
