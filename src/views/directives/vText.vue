<template>
  <div>
    <h2>v-text</h2>
    Instead of using interpolation/brackets, you can use the v-text directive. It performs the same job:
    <br>
    <br>
    
    <h4>Example:</h4>
    we have parameter <b>name</b> with default value "foo bar", try change it's value
    <div class="field">
      <span class="control">
        <input class="input" type="text" placeholder="edit name" v-model="name">
      </span>
    </div>
    <br>

    when using interpolation or bracket
    <pre v-text="code1"></pre>
    result:
    <blockquote><div>{{ name }}</div></blockquote>
    <br>
    
    will give the same result with <b>v-text</b>
    <pre v-text="code2"></pre>
    result:
    <blockquote><div v-text="name" /></blockquote>
  </div>
</template>

<script>
export default {
  name: 'vText',
  data () {
    return {
      name: 'foo bar',
      code1: '<div>{{ name }}</div>',
      code2: '<div v-text="name" />',
    }
  },
}
</script>
