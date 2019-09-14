<template>
    <div class="button"><a :href=link>{{msg}}</a></div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            msg: String,
            link: String
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
