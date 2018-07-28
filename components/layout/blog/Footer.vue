<template>
    <footer>
        <div class="container">
            <p>2018 &copy; Wszelkie prawa zastrzeżone</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">
    footer{
        background-color: #333;
        color: #fff;
        padding: 30px 0;

        position: absolute;
        bottom: 0;
        width: 100%;

        p{
            margin: 0;
            text-align: center;
        }
    }
</style>