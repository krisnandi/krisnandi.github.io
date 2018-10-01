<template>
  <div>
    <div>
      <h2>custom directive</h2>
      Vue also allows you to register your own custom directives. 
      <br>
      for more information, see vue docs <a href="https://vuejs.org/v2/guide/custom-directive.html">Link</a>
      <br>
      or a better example <a href="https://alligator.io/vuejs/custom-directives/">alligator.io</a>
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
import sample from './sample/vcustom.txt'
// import sampleChild from './sample/vcustom.txt'
import example from './example/vcustom'

export default {
  name: 'vCustom',
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