<template>
  <div>
    <h2>v-bind</h2>
    Interpolation only works in the tag content. You can’t use it on attributes.
    Attributes must use v-bind:
    <pre v-text="code1"></pre>

    v-bind is so common that there is a shorthand syntax for it:
    <pre v-text="code2"></pre>
    <br>

    <h4>Example:</h4>
    we have parameter <b>url</b> with no default value, try change it's value to specific url
    <div class="field">
      <span class="control">
        <input class="input" type="text" placeholder="edit name" v-model="url">
      </span>
    </div>
    <br>

    result:
    <blockquote>
      <a v-bind:href="url">{{ linkText }}</a>
      <br>
      <a :href="url">{{ linkText }}</a>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'vBind',
  data () {
    return {
      url: '',
      linkText: 'Click me!',
      code1: '<a v-bind:href="url">{{ linkText }}</a>',
      code2: `<a v-bind:href="url">{{ linkText }}</a>
<a :href="url">{{ linkText }}</a>`,
    }
  },
}
</script>
