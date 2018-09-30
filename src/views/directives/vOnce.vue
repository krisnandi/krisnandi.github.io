<template>
  <div>
    <div>
      <h2>v-once</h2>
      Applies the property just once, and never refreshes it even if the data passed changes.
    </div>
    
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
      <a class="button is-primary" @click="showingSample">Display Sample</a>
 
     <blockquote v-if="showSample"><example :input="name"></example></blockquote>
    </div>
  </div>
</template>


<script>
import sample from './sample/vonce.txt'
import example from './example/vonce'

export default {
  name: 'vOnce',
  data () {
    return {
      name: 'foo bar',
      showSample: false,
      sample,
    }
  },
  components: {
    example,
  },
  methods: {
    showingSample () {
      this.showSample = true
    },
  },
}
</script>
