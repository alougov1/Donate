<template>
  <div class="App">
      <Map>
          name="example"
      </Map>
  </div>
</template>

<script>
    import Map from './components/Map';

    export default {
        name: 'App',
        components: {
            Map
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
    width: 100vw;
    height: 100vh;
  }
</style>