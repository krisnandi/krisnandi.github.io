<template>
  <div>
    <div>
      <h2>v-if</h2>
      Show an element only if the conditional is true
    </div>
    
    <div>
      <h4>Sample Code:</h4>
      <pre>{{sample}}</pre>
    </div>
    
    <div>
      <h4>Runable Example:</h4>
      We have boolean parameter, try change the value by checking the checkbox.
      <div>
        <label class="checkbox">
          <input type="checkbox" v-model="isTrue">
          isTrue Value
        </label>
      </div>

      result:
      <blockquote><example :isTrue="isTrue"/></blockquote>
    </div>
  </div>
</template>

<script>
import sample from './sample/vif.txt'
import example from './example/vif'

export default {
  name: 'vIf',
  data () {
    return {
      isTrue: false,
      sample,
    }
  },
  components: {
    example,
  },
}
</script>
