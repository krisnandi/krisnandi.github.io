<template>
  <div>
    <div>
      <h2>v-model</h2>
      The v-model directive updates the template whenever the model changes and updates data model whenever the template changes.

      <br>
      By default, v-model is evaluated every time the input event is fired (ie. on keypress or paste.) If you’d rather wait until the user has finished inputting and unfocused the field, you can use the v-model.lazy modifier to have v-model listen to the change event instead.
    </div>

    <div>
      <h4>Sample Code:</h4>
      <pre>{{sample}}</pre>
    </div>
    
    <div>
      <h4>Runable Example:</h4>
      <blockquote>
        <example />
      </blockquote>
    </div>
  </div>
</template>


<script>
import sample from './sample/vmodel.txt'
import example from './example/vmodel'

export default {
  name: 'vModel',
  data () {
    return {
      sample,
    }
  },
  components: {
    example,
  },
}
</script>