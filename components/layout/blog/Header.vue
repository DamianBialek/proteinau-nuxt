<template>
    <header class="page-header">
        <div class="container">
            <p>Blog</p>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
    .page-header{
        background-color: #333;
        color: #fff;
        height: 80px;
        display: flex;
        align-items: center;

        p{
            margin: 0;
            font-size: 2rem;
        }
    }
</style>