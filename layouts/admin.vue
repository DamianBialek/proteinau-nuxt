<template>
    <no-ssr>
        <div class="admin-container">
            <Header />
            <main>
                <Sidebar />
                <nuxt class="admin-content" />
            </main>
        </div>
    </no-ssr>
</template>

<script>
    import Header from '@/components/layout/admin/Header'
    import Sidebar from '@/components/layout/admin/Sidebar'
    export default {
        name: "admin",
        components: {Header, Sidebar}
    }
</script>

<style lang="scss">
    html, .admin-container{
        height: 100%;
    }

    body{
        min-height: 100%;
        height: 100%;
        position: relative;
    }
    main{
        padding-top: 60px;
        margin: 0;
        height: 100%;
    }
    #__nuxt, #__layout{
        height: 100%;
    }
    .admin-content{
        margin-left: 200px;
        padding: 30px 15px;
        width: calc(100% - 200px);
        min-height: 100%;

        .row{
            padding: 1rem 0;

            &:first-child{
                padding-top: 0;
            }
        }
    }
</style>