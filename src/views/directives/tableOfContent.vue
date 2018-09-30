<template>
  <aside class="menu has-text-left column is-2">
    <p class="menu-label">
      Directives
    </p>
    <ul class="menu-list">
      <li><router-link v-for="(menu, index) in menus" :key="index" :to="toPath(menu.path)">{{menu.name}}</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'tableOfCOntent',
  computed: {
    menus () {
      return this.$router.options.routes[1].children
    },
  },
  methods: {
    toPath (path) {
      return this.$router.options.routes[1].path + '/' + path
    },
  },
}
</script>
