<template>
  <div>
    <div>
      <h2>v-on</h2>
      Vue offers some optional event modifiers you can use in association with v-on, which automatically make the event do something without you explicitly coding it in your event handler.

      for more info go to vusjs docs <a href="https://vuejs.org/v2/guide/events.html#Event-Modifiers">Link</a>
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
import sample from './sample/vonmodifier.txt'
import example from './example/vonmodifier'

export default {
  name: 'vOn',
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