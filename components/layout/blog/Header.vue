<template>
    <header class="page-header" >
        <div class="container">
            <p>{{headerTitle}}</p>
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
        height: 80px;
        display: flex;
        align-items: center;

        p{
            margin: 0;
            font-size: 2rem;
        }
    }
</style>