<template>
  <div>
    <div>
      <h2>v-if-else</h2>
      Show an element if the conditional is true, very useful for more complex conditional logic
    </div>
    
    <div>
      <h4>Sample Code:</h4>
      <pre>{{sample}}</pre>
    </div>
    
    <div>
      <h4>Runable Example:</h4>
      we have parameter <b>name</b> with no default value, try change it's value to either "batman" or "spiderman"
      <div class="field">
        <span class="control">
          <input class="input" type="text" placeholder="edit name" v-model="name">
        </span>
      </div>

      result:
      <blockquote><example :name="name"/></blockquote>
    </div>
  </div>
</template>

<script>
import sample from './sample/vifelse.txt'
import example from './example/vifelse'

export default {
  name: 'vIfElse',
  data () {
    return {
      name: '',
      sample,
    }
  },
  components: {
    example,
  },
}
</script>
