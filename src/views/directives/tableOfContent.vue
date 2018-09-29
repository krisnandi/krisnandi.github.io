<template>
  <aside class="menu has-text-left">
    <p class="menu-label">
      Directives
    </p>
    <ul class="menu-list">
      <!-- <li><a>Dashboard</a></li> -->
      <li><router-link v-for="(menu, index) in menus" :key="index" :to="menu.name">{{menu.name}}</router-link></li>
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
}
</script>
