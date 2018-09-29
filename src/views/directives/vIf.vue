<template>
  <div>
    <h2>v-if</h2>
    Show an element only if the conditional is true
    <pre v-text="code1"></pre>
    <br>
    
    <h4>Example:</h4>
    We have parameter <b>isTrue</b>, try change the value by checking the checkbox.
    <div>
      <label class="checkbox">
        <input type="checkbox" v-model="isTrue">
        isTrue Value
      </label>
    </div>
    <br>

    result:
    <blockquote><p v-if="isTrue">Anjash!</p></blockquote>
  </div>
</template>

<script>
export default {
  name: 'vIf',
  data () {
    return {
      isTrue: false,
      code1: '<p v-if="isTrue">Anjash!</p>',
    }
  },
}
</script>
