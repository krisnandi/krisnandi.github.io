<template>
  <div>
    <div>
      <h2>v-model</h2>
      While v-model is a powerful asset for adding two-way data-binding to vanilla components, it’s not always readily apparent how to add support for v-model to your own custom components. Turns out though, it’s pretty simple.
    </div>

    <div>
      <h4>Sample Code:</h4>
      v-model component:
      <pre>{{sampleChild}}</pre>

      how to use it:
      <pre>{{sample}}</pre>
    </div>
    
    <div>
      <h4>Runable Example:</h4>
      <blockquote>
        <example />
      </blockquote>
    </div>
  </div>
</template>


<script>
import sample from './sample/vmodelcomponent.txt'
import sampleChild from './sample/vmodelchild.txt'
import example from './example/vmodelcomponent'

export default {
  name: 'vModelComponent',
  data () {
    return {
      sample,
      sampleChild,
    }
  },
  components: {
    example,
  },
}
</script>