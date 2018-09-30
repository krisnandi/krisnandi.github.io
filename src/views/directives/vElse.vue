<template>
  <div>
    <div>
      <h2>v-else</h2>
      Show an element if the conditional is true, and show else other element if the conditional is false 
    </div>
    
    <div>
      <h4>Sample Code:</h4>
      <pre>{{sample}}</pre>
    </div>
    
    <div>
      <h4>Runable Example:</h4>
      We have parameter <b>isTrue</b>, try change the value by checking the checkbox.
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
import sample from './sample/velse.txt'
import example from './example/velse'

export default {
  name: 'vElse',
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
