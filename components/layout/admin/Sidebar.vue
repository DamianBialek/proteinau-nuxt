<template>
    <div class="sidebar">
        <nav>
            <div class="list-group list-group-flush">
                <nuxt-link to="/admin/component/articles" class="list-group-item admin-link">ARTYKUŁY</nuxt-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style lang="scss">
.sidebar{
    height: 100%;
    position: fixed;
    left: 0;
    background-color: #70C14A;
    width: 200px;

    .admin-link{
        background-color: transparent;
        color: #fff;

        &:hover{
            background-color: #309006;
        }
    }
}
</style>