<template>
  <div>
    
    <input class="input" type="text" placeholder="auto focus" v-focus>
  </div>
</template>

<script>
import Vue from 'vue'

// Register a global custom directive called `v-focus`
Vue.directive('focuz', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  },
})

export default {
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      },
    },
  },
}
</script>
