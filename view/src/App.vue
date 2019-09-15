<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  h1 {
    font-family: 'Charter', sans-serif;
    font-size: 54px;
    text-align: left;
    user-select: none;
  }
  h1 > strong {
    font-style: italic;
  }
  p {
    font-family: 'Avenir', sans-serif;
    text-align: left;
    font-size: 20px;
  }
  #app {
    align-items: center;
    align-content: center;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
