<template>
    <header class="admin-header">
        <nuxt-link to="/admin">Admin</nuxt-link>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
.admin-header{
    background-color: #333;
    padding: 0 15px;
    color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    z-index: 2;

    a{
        color: inherit;

        &:hover{
            text-decoration: none;
            color: #70C14A;
        }
    }
}
</style>