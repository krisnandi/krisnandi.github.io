<template>
  <div>     
    <div>
      <label class="checkbox">
        <input type="checkbox" v-model="isTrue">
        isTrue Value
      </label>
    </div>
    <child v-if="isTrue" name="if" />
    <child v-show="isTrue" name="show" />
  </div>
</template>

<script>
import child from './example/vchild'

export default {
  name: 'vModelConditional',
  data () {
    return {
      isTrue: false,
    }
  },
  components: {
    child,
  },
}
</script>
