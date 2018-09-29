<template>
  <div>
    <h2>v-show</h2>
    Nearly similar to v-if but the element is still inserted in the DOM, but set to display: none if the condition is not satisfied
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
    <blockquote><p v-show="isTrue">Anjash</p></blockquote>
  </div>
</template>

<script>
export default {
  name: 'vIf',
  data () {
    return {
      isTrue: false,
      code1: '<p v-show="isTrue">Anjash</p>',
    }
  },
}
</script>
