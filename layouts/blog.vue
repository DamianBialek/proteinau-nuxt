<template>
    <div>
        <Navbar class="sticky-top" />
        <Header />
        <main class="container">
            <section class="row">
                <nuxt  class="col-lg-9 main-content"/>
                <Sidebar class="col-lg-3 sidebar"></Sidebar>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/layout/blog/Header'
    import Navbar from '@/components/layout/blog/Navbar'
    import Sidebar from '@/components/layout/blog/Sidebar'
    import Footer from '@/components/layout/blog/Footer'
    export default {
        name: "blog",
        components: {Navbar, Header, Sidebar, Footer}
    }
</script>

<style lang="scss">
    html{
        height: 100%;
    }

    body{
        min-height: 100%;
        position: relative;
        padding-bottom: 80px;
    }
    main{
        padding-bottom: 50px;

        .main-content, .sidebar{
            padding-top: 50px;
        }
    }
</style>