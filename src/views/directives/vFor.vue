<template>
  <div>
    <h2>v-for</h2>
    allows you to render a list of items from Array or Object.
    <br>
    <br>

    <h4>Example loop of Array:</h4>
    Array:
    <pre>items: ['car', 'bike', 'dog']</pre>
    logic:
    <pre v-text="arrayCode"></pre>
    result:
    <blockquote><ul><li v-for="(item, index) in arrayItems" :key="index">{{ item }}</li></ul></blockquote>
    <br><br>

    <h4>Example loop of Object:</h4>
    Array:
    <pre>obejctItems: {
  key1: 'batman',
  key2: 'spiderman',
  key3: 'humanman',
}</pre>
    logic:
    <pre v-text="objectCode"></pre>
    result:
    <blockquote><ul><li v-for="(item, index) in objectItem" :key="index">{{ item }}</li></ul></blockquote>
  </div>
</template>

<script>
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
      arrayCode: `<ul>
  <li v-for="(item, index) in arrayItems" :key="index">{{ item }}</li>
</ul>`,
      objectCode: `<ul>
  <li v-for="(item, index) in objectItem" :key="index">{{ item }}</li>
</ul>`,
    }
  },
}
</script>
