<template>
  <div>
    <h2>v-on</h2>
    It allows you to listen to DOM events, and trigger a method when the event happens.
    <pre v-text="code1"></pre>

    v-on is so common that there is a shorthand syntax for it, @:
    <pre v-text="code2"></pre>
    <br>

    <h4>Example:</h4>
    we have function handleClick, which will showing alert.
    <pre v-text="code3"></pre>
    <br>

    click the link to see the result:
    <blockquote>
      <a v-on:click="handleClick">Click me!</a>
      <br>
      <a @:click="handleClick">Click me!</a>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'vOn',
  data () {
    return {
      url: '',
      linkText: 'Click me!',
      code1: '<a v-on:click="handleClick">Click me!</a>',
      code2: `<a v-on:click="handleClick">Click me!</a>
<a @:click="handleClick">Click me!</a>`,
      code3: `methods: {
  handleClick () {
    alert('test')
  }
}`,
    }
  },
  methods: {
    handleClick () {
      alert('test')
    },
  },
}
</script>
