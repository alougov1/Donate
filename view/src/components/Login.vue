<template>
  <div class="login-box">
    <h1>Sign in</h1>
    <div class="input-container">
      <input v-model="username" placeholder="Username">
      <input v-model="password" placeholder="Password">
    </div>
    <Button msg="Continue"></Button>
  </div>
</template>

<script>
  import Button from './Button'

  export default {
    name: "Login",
    components: {
      Button
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  input {
    margin: 5px 0;
    width: 75%;
    font-size: 16px;
    font-family: 'Avenir', sans-serif;
  }
  .login-box {
    display: inline-block;
    background-color: lightgray;
    height: 350px;
    width: 300px;
  }
  .input-container {
    align-content: flex-start;
    margin-bottom: 10%;
  }
</style>
