<template>
  <div>
    <a href="url">Link withound v-bind</a><br>
    <a v-bind:href="url">Link with v-bind</a><br>
    <a :href="url">Link with v-bind shorthand</a><br>
  </div>
</template>

<script>
export default {
  props: ['url'],
}
</script>
