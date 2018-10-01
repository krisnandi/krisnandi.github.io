<template>
  <div>
    <a href="handleClick">Link withound v-bind</a><br>
    <a v-on:click="handleClick">Link with v-bind</a><br>
    <a @click="handleClick">Link with v-bind shorthand</a><br>
    <child @input="handleInput" />
  </div>
</template>

<script>
import child from './vchild'

export default {
  data () {
    return {
      dataProperty: null,
    }
  },
  methods: {
    handleClick () {
      alert('test')
    },
    handleInput (val) {
      this.dataProperty = val
    },
  },
  components: {
    child,
  },
}
</script>
