<template>
  <div class="App">
      <Home/>
  </div>
</template>

<script>
    import Map from './components/Map.vue';
    import Welcome from "./components/Welcome.vue";
    import Home from './views/Home.vue';

    export default {
        name: 'App',
        components: {
            Welcome,
            Map,
            Home
        }
    };
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .App {
    font-family: 'Charter', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>