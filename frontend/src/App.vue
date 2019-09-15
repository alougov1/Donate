<template>
  <div id="App">
      <Home></Home>
      <Button @click="setNewValue">TEST BUTTON</Button>
      <p id="test">{{ info }}</p>
  </div>
</template>

<script>
    import Map from './components/Map.vue';
    import Welcome from "./components/Welcome.vue";
    import Home from './views/Home.vue';

    export default {
        name: 'App',
        el: '#App',
        components: {
            Welcome,
            Map,
            Home
        },
        data () {
            return {
                info: "asdf"
            }
        },
        methods: {
            setNewValue: function () {
                this.info = 'New value';
            }
        },
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