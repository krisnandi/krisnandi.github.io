<template>
  <div>
    <h2>v-if-else</h2>
    Show an element if the conditional is true, very useful for more complex conditional logic
    <pre v-text="code1"></pre>
    <br>
    
    <h4>Example:</h4>
    we have parameter <b>name</b> with no default value, try change it's value to either "batman" or "spiderman"
    <div class="field">
      <span class="control">
        <input class="input" type="text" placeholder="edit name" v-model="name">
      </span>
    </div>
    <br>

    result:
    <blockquote>
      <p v-if="name === 'batman'">I am batman!</p>
      <p v-else-if="name === 'spiderman'">I am spiderman!</p>
      <p v-else>I am programmer!</p>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'vElse',
  data () {
    return {
      name: '',
      code1: `<p v-if="name === 'batman'">I am batman!</p>
<p v-else-if="name === 'spiderman'">I am spiderman!</p>
<p v-else>I am programmer!</p>`,
    }
  },
}
</script>
