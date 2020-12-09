<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './shared/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style scoped>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
