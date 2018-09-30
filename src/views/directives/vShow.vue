<template>
  <div>
    <div>
      <h2>v-show</h2>
      Nearly similar to v-if but the element is still inserted in the DOM, but set to display: none if the condition is not satisfied
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
import sample from './sample/vshow.txt'
import example from './example/vshow'

export default {
  name: 'vShow',
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
