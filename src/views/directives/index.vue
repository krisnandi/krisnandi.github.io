<template>
  <div class="container is-flex has-text-left">
    <tableOfContent />
    <div class="content">
      <router-view/>
      <!-- <whatIs />
      <vText />
      <vHtml />
      <vOnce />
      <vIf />
      <vElse />
      <vIfElse />
      <vShow />
      <vIfAndShow />
      <vFor />
      <vBind />
      <vOn /> -->
    </div>
  </div>
</template>

<script>
import tableOfContent from './tableOfContent'
import whatIs from './whatIs'
import vText from './vText'
import vHtml from './vHtml'
import vOnce from './vOnce'
import vIf from './vIf'
import vElse from './vElse'
import vIfElse from './vIfElse'
import vShow from './vShow'
import vIfAndShow from './vIfAndShow'
import vFor from './vFor'
import vBind from './vBind'
import vOn from './vOn'

export default {
  name: 'directives',
  components: {
    tableOfContent,
    whatIs,
    vText,
    vHtml,
    vOnce,
    vIf,
    vElse,
    vIfElse,
    vShow,
    vIfAndShow,
    vFor,
    vBind,
    vOn,
  },
}
</script>
