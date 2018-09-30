<template>
  <div>
    <div>
      <h2>v-html</h2>
      There are cases when you want to output HTML and make the browser interpret it. You can use the v-html directive:
    </div>

    <div>
      <h4>Sample Code:</h4>
      <pre>{{sample}}</pre>
    </div>

    <div>
      <h4>Runable Example:</h4>
      Try inputing any text with HTML format,
      <textarea class="textarea" v-model="htmlValue"></textarea>
      <a class="button is-warning" @click="surprise1">Press me!!</a>
      <a class="button is-primary" @click="surprise2">Press me!!</a>
      <br>

      result:
      <div class="exampleDiv">
        <example :input="htmlValue"></example>
      </div>
    </div>
  </div>
</template>

<script>
import sample from './sample/vhtml.txt'
import example from './example/vhtml'

export default {
  name: 'vHtml',
  components: {
    example,
  },
  data () {
    return {
      sample,
      htmlValue: '<div><b>Foo Bar</b></div>',
      example1: `<div class="card">
  <div class="card-content">
    <p class="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p class="subtitle">
      Jeff Atwood
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div>`,
      example2: `<a class="button is-primary">
  Button
</a>`,
    }
  },
  methods: {
    surprise1 () {
      this.htmlValue = this.example1
    },
    surprise2 () {
      this.htmlValue = this.example2
    },
  },
}
</script>
