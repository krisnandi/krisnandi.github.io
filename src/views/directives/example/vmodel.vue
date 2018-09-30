<template>
  <div>
    using v-model:<br>
    <input v-model="dataProperty" placeholder="Enter a message"><br>

    equivalent of v-model:<br>
    <input :value="dataProperty" @input="dataProperty = $event.target.value" placeholder="Enter a message"><br>

    using v-model.lazy:<br>
    <input v-model.lazy="dataProperty" placeholder="Enter a message"><br>

    <br>
    <p>Message is: {{ dataProperty }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataProperty: '',
    }
  },
}
</script>
