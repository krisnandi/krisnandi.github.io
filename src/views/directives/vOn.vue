<template>
  <div>
    <div>
      <h2>v-on</h2>
      It allows you to listen to DOM events, and trigger a method when the event happens.
    </div>

    <div>
      <h4>Sample Code:</h4>
      <pre>{{sample}}</pre>
    </div>
    
    <div>
      <h4>Runable Example:</h4>
      we have function handleClick, which will showing alert. click the link to see the result, then check the web inspector to see the detail.
      <blockquote>
        <example />
      </blockquote>
    </div>
  </div>
</template>


<script>
import sample from './sample/von.txt'
import example from './example/von'

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