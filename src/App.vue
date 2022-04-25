<template>
  <div id="app">
    <headerIndex></headerIndex>
    <footerIndex></footerIndex>
  </div>
</template>

<script>
import headerIndex from './components/Header'
import footerIndex from './components/Footer'

export default {
  name: 'App',
  components: {
    headerIndex,
    footerIndex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
