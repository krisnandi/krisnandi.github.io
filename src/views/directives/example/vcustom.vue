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
  inserted: function (element, binding, vnode) {
    // Focus the element
    element.focus()
  },
})

export default {
  directives: {
    focus: {
      // When the bound element is inserted into the DOM...
      inserted: function (element, binding, vnode) {
        // Focus the element
        console.log('inserted')
        console.log(binding.modifiers.disable)
        if (!binding.modifiers.disable) {
          element.focus()
        }
      },
      bind: function (element, binding, vnode) {
        console.log('bind')
      },
      update: function (element, binding, vnode, oldVnode) {
        console.log('update')
      },
      componentUpdated: function (element, binding, vnode, oldVnode) {
        console.log('componentUpdated')
      },
      unbind: function (element, binding, vnode, oldVnode) {
        console.log('unbind')
      },
    },
  },
}
</script>
