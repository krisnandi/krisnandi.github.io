<template>
  <div>
    <div>
      <h2>v-for</h2>
      allows you to render a list of items from Array or Object.
    </div>
    
    <div>
      <h4>Sample Code:</h4>
      <pre>{{sample}}</pre>
    </div>
    
    <div>
      <h4>Runable Example 1:</h4>
      Use array to define Item list
      <pre>{{ arrayItems }}</pre>
      result:
      <blockquote>
        <example :items="arrayItems" />
      </blockquote>
    </div>

    <div>
      <h4>Runable Example 2:</h4>
      Use object to define Item list
      <pre>{{ objectItem }}</pre>
      result:
      <blockquote>
        <example :items="objectItem" />
      </blockquote>
    </div>
  </div>
</template>

<script>
import sample from './sample/vfor.txt'
import example from './example/vfor'

export default {
  name: 'vFor',
  data () {
    return {
      arrayItems: ['car', 'bike', 'dog'],
      objectItem: {
        key1: 'batman',
        key2: 'spiderman',
        key3: 'humanman',
      },
      sample,
    }
  },
  components: {
    example,
  },
}
</script>
