<template>
  <div>
    <div>
      <h2>v-bind</h2>
      Interpolation only works in the tag content. You can’t use it on attributes.
      Attributes must use v-bind:
    </div>


    <div>
      <h4>Sample Code:</h4>
      <pre>{{sample}}</pre>
    </div>
    
    <div>
      <h4>Runable Example:</h4>

      we have parameter <b>url</b> check the web inspect, also try change it's to see the difference.
      <div class="field">
        <span class="control">
          <input class="input" type="text" placeholder="edit name" v-model="url">
        </span>
      </div>

      result:
      <blockquote>
        <example :url="url" />
      </blockquote>
    </div>
  </div>
</template>

<script>
import sample from './sample/vbind.txt'
import example from './example/vbind'

export default {
  name: 'vBind',
  data () {
    return {
      url: 'https://dana.id/',
      sample,
    }
  },
  components: {
    example,
  },
}
</script>