<template>
  <div>
    <h2>v-if vs v-show</h2>
    
    <h4>Example:</h4>
    We have parameter <b>isTrue</b>, try change the value by checking the checkbox.
    <div>
      <label class="checkbox">
        <input type="checkbox" v-model="isTrue">
        isTrue Value
      </label>
    </div>
    <br>

    <pre v-text="code1"></pre>
    result:
    <blockquote>
      <p v-if="isTrue">Anjash v-if</p>
      <p v-show="isTrue">Anjash v-show</p>
    </blockquote>
    Inspect element to see the diffrence.
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
