<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <nuxt-link class="navbar-brand" :to="{name:'index'}" exact exact-active-class="" active-class="">PROTEINAU</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <nuxt-link tag="li" class="nav-item" exact active-class="active" exact-active-class="" :to="{name: 'index'}">
                        <a class="nav-link">Strona główna</a>
                    </nuxt-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    // import {childrenRoutes as routes} from '@/blog/router'
    export default {
        name: "Navbar",
        data(){
            return {
                routes: []
            }
        },
        mounted: function(){
            // this.routes = routes.filter(this.filterMenuItems)
        },
        methods: {
            // filterMenuItems: function(item){
            //     if(item.meta && item.meta.isMenuItem)
            //         return item.meta.isMenuItem
            // }
        }
    }
</script>

<style lang="scss">
    .navbar{
        min-height: 80px;

        .navbar-brand{
            font-size: 2rem;
            font-weight: bold;
        }

        .nav-item{
            &.active{
                border-bottom: 4px solid #70C14A;
            }
        }
    }
    .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link{
        color: #70C14A;
    }
</style>