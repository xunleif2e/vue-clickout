<template>
  <div id="app">
    <p>评论列表中的回复框是互斥的，且点击空白处消失</p>
    <comment-item v-for="(n, index) in 5" :key="index"></comment-item>
  </div>
</template>

<script>
import commentItem from '@/components/commentItem'

export default {
  name: 'app',
  components: {
    commentItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
