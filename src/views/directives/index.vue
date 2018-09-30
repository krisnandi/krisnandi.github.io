<template>
  <div class="container is-flex has-text-left is-fullwidth">
    <div class="columns">
      <tableOfContent />
      <div class="content column is-narrow">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import tableOfContent from './tableOfContent'

export default {
  name: 'directives',
  components: {
    tableOfContent,
  },
}
</script>
