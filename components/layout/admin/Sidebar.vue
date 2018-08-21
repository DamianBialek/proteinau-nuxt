<template>
    <div class="sidebar">
        <nav>
            <div class="list-group list-group-flush">
                <nuxt-link to="/admin/component/articles" class="list-group-item admin-link" exact-active-class="" active-class="active"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> ARTYKUŁY</nuxt-link>
                <nuxt-link to="/admin/component/categories" class="list-group-item admin-link" exact-active-class="" active-class="active"><i class="fa fa-list" aria-hidden="true"></i> KATEGORIE</nuxt-link>
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
@import '@/assets/admin.scss';
.sidebar{
    height: 100%;
    position: fixed;
    left: 0;
    background-color: $primaryColor;
    width: 200px;

    .admin-link{
        background-color: transparent;
        color: #fff;

        &:hover{
            background-color: $hoverPrimaryColor;
        }

        &.active{
            color: #000;
        }
    }
}
</style>