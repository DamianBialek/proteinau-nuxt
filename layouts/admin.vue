<template>
    <no-ssr>
        <div class="admin-container">
            <Header />
            <main>
                <Sidebar />
                <div class="admin-content">
                    <message-notification />
                    <nuxt />
                </div>

            </main>
        </div>
    </no-ssr>
</template>

<script>
    import Header from '@/components/layout/admin/Header'
    import Sidebar from '@/components/layout/admin/Sidebar'
    export default {
        name: "admin",
        components: {Header, Sidebar},
        middleware: ['admin']
    }
</script>

<style lang="scss">
    @import '@/assets/transitions.css';
    @import '@/assets/admin.scss';


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