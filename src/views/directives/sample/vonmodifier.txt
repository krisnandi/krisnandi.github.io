<template>
  <div>
    <a @click.once="handleClick">only click once</a><br>
    
    <form v-on:submit="handleClick">
      <input type="text" placeholder="without prevent">
    </form>
    
    <form v-on:submit.prevent="handleClick">
      <input type="text" placeholder="with prevent">
    </form>

    <div @click="handleClick('parent')">
      <div @click="handleClick('child')">nested without stop modifier</div>
    </div>

    <div @click="handleClick('parent')">
      <div @click.stop="handleClick('child')">nested with stop modifier</div>
    </div>

    <div @click="handleClick('parent')">
      <div @click.stop.once="handleClick('child')">nested with chained stop-once modifier</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vOn',
  methods: {
    handleClick (e) {
      alert(e)
    },
  },
}
</script>
