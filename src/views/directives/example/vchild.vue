<template>
  <div><button @click="eventHandler">Click Me!</button></div>
</template>

<script>
export default {
  props: ['name'],
  mounted () {
    console.log('mounted: ', this.name)
  },
  methods: {
    eventHandler () {
      this.$emit('input', 123)
    },
  },
}
</script>
