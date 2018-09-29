<template>
  <div>
    <h2>v-else</h2>
    Show an element if the conditional is true, and show else other element if the conditional is false 
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
    <blockquote>
      <p v-if="isTrue">I am true!</p>
      <p v-else>I am false!</p>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'vElse',
  data () {
    return {
      isTrue: false,
      code1: `<p v-if="isTrue">I am true!</p>
<p v-else>I am false!</p>`,
    }
  },
}
</script>
