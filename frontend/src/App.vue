<template>
  <div id="App">
      <Home></Home>
      <p id="test">{{ info }}</p>
  </div>
</template>

<script>
    import Map from './components/Map.vue';
    import Welcome from "./components/Welcome.vue";
    import Home from './views/Home.vue';
    import Vue from "vue";
    import axios from "axios"

    new Vue({
        el: '#test',
        data: {
            info: "null"
        },
        mounted() {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response))
        }
    });

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