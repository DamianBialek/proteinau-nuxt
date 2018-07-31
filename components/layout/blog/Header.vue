<template>
    <header class="page-header" >
        <div class="container">
            <h1>{{headerTitle}}</h1>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Header",
        data(){
            return {
            }
        },
        computed:{
            ...mapGetters([
                'headerTitle'
            ])
        }
    }
</script>

<style lang="scss">
    .page-header{
        background-color: #333;
        color: #fff;
        padding: 10px;
        display: flex;
        align-items: center;
        min-height: 80px;

        h1{
            margin: 0;
            font-size: 2rem;
            font-weight: normal;
        }
    }
</style>