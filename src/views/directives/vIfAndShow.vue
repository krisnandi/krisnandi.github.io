<template>
  <div>
    <div>
      <h2>v-if vs v-show</h2>
      Very similar to v-if, the v-show directive can also be used to show and hide an element based on an expression.
      <br>
      The main difference between the two is that,
      <br>
      v-if - Only renders the element to the DOM if the expression passes.
      <br>
      v-show - Renders all elements to the DOM and then uses the CSS display property to hide elements if the expression fails.
      <br>
      v-show - Does not support v-else, v-else-if
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

      <pre v-text="code1"></pre>
      result:
      <blockquote>
        <p v-if="isTrue">Anjash v-if</p>
        <p v-show="isTrue">Anjash v-show</p>
      </blockquote>
      Inspect element to see the diffrence.
    </div>
  </div>
</template>

<script>
export default {
  name: 'vIf',
  data () {
    return {
      isTrue: false,
      code1: `<p v-if="isTrue">Anjash v-if</p>
<p v-show="isTrue">Anjash v-show</p>`,
    }
  },
}
</script>
