<template>
    <div class="home">
        <div class="homeContainer">
            <div class = "title">
                <h1>Reinventing the way you<br><strong>give stuff away</strong></h1>
            </div>
            <div class = "subtitle">
                <p>Let’s make the most out of your unused<br>books, clothing, and furniture.</p>
            </div>
        </div>

        <div class="imageContainer">
            <a href="https://icons8.com/ouch"><img class="homeImage" alt="Giving is good" src="../assets/giving.png"></a>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Home',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        margin: 15% 15% 15% 15%;
    }
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