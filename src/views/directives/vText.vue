<template>
  <div>
    <h2>v-text</h2>
    <div>Instead of using interpolation/brackets, you can use the v-text directive. It performs the same job:</div>
    
    <div>
      <h4>Sample Code:</h4>
      <pre>{{sample}}</pre>
    </div>

    <div>
      <h4>Runable Example:</h4>
      we have parameter <b>name</b> with default value "foo bar", try change it's value
      <div class="field">
        <span class="control">
          <input class="input" type="text" placeholder="edit name" v-model="name">
        </span>
      </div>

      <blockquote><example :name="name"></example></blockquote>
    </div>
  </div>
</template>

<script>
import sample from './sample/vtext.txt'
import example from './example/vtext'

export default {
  name: 'vText',
  data () {
    return {
      name: 'foo bar',
      sample,
    }
  },
  components: {
    example,
  },
}
</script>
