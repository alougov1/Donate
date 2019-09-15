<template>
  <div class="home">
    <div class="homeContainer">
      <div class = "title">
        <h1>Reinventing the way you<br><strong>give stuff away</strong></h1>
      </div>
      <div class="subtitle">
        <p>Let’s make the most out of your unused<br>books, clothing, and furniture.</p>
      </div>
      <div class="buttonContainer">
        <Button msg="Get Started"></Button>
      </div>
    </div>

    <div class="imageContainer">
      <a href="https://icons8.com/ouch"><img class="homeImage" alt="Giving is good" src="../assets/giving.png"></a>
    </div>
  </div>
</template>

<script>
  import Button from "./Button";
  export default {
    name: 'Home',
    components: {
      Button,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    margin: 15% 15% 15% 15%;
  }
  .subtitle {
    margin: 3% 0;
  }
  .buttonContainer{
    padding-top: 3%;
  }
  .imageContainer {
    position: absolute;
    top: 20%;
    left: 35%;
    z-index: -1;
  }
  .homeImage {
    width: 900px;
    height: auto;
  }
</style>
