<template>
    <div class="button">{{ msg }}
      <p>{{ getTest() }}</p>
    </div>
</template>

<script>
    import apiService from '../apiservice.js';
    const API_URL = 'http://localhost:3000';

    export default {
        props: {
            msg: String,
        },
        methods: {
          getTest() {
            apiService.test().then((data) => {

              return data['2'];

            });
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .button {
        background-color: #3B8CD8;
        border: none;
        color: white;
        margin: 10px 20px;
        padding-top: 15px;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;
        cursor: pointer;
        border-radius: 30px;
        width: 250px;
        height: 40px;
        font-size: 20px;
    }
</style>
