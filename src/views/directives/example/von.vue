<template>
  <div>
    <a href="handleClick">Link withound v-bind</a><br>
    <a v-on:click="handleClick">Link with v-bind</a><br>
    <a @click="handleClick">Link with v-bind shorthand</a><br>
  </div>
</template>

<script>
export default {
  name: 'vOn',
  methods: {
    handleClick () {
      alert('test')
    },
  },
}
</script>
