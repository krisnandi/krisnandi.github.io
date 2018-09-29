<template>
  <div>
    <h2>v-once</h2>
    Applies the property just once, and never refreshes it even if the data passed changes.
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

    Use <b>v-once</b>
    <pre v-text="code1"></pre>
    result:
    <blockquote><span v-once>{{ name }}</span></blockquote>
    <br>
    
    Without <b>v-once</b>
    <pre v-text="code2"></pre>
    result:
    <blockquote><span>{{ name }}</span></blockquote>
  </div>
</template>

<script>
export default {
  name: 'vText',
  data () {
    return {
      name: 'foo bar',
      code1: '<span v-once>{{ name }}</span>',
      code2: '<span>{{ name }}</span>',
    }
  },
}
</script>
