<template>
  <div class="wrapper">
    <date-picker v-model="date"></date-picker>
    <p>
      Month: {{date.month}}
      Year: {{date.year}}
    </p>
  </div>
</template>

<script>
import DatePicker from './vmodelchild'

export default {
  components: {
    DatePicker,
  },

  data () {
    return {
      date: {
        month: 1,
        year: 2017,
      },
    }
  },
}
</script>