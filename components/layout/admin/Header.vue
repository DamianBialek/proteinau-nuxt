<template>
    <header class="admin-header">
        <div class="col admin-logo">
            <nuxt-link to="/admin">Admin</nuxt-link>
        </div>
        <div v-if="isAuthenticatedAdmin" class="col admin-user text-right">
            <div class="col-8">
                <span>Zalogowano jako: <b>{{loggedAdmin.name}}</b></span>
            </div>
            <div class="col text-right">
                <button class="btn admin-btn" @click="logout">Wyloguj</button>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {removeToken} from "@/utils/auth";

    export default {
        name: "Header",
        computed:{
            ...mapGetters([
                'isAuthenticatedAdmin',
                'loggedAdmin'
            ])
        },
        methods:{
            logout(){
                removeToken()
                console.log(this.$router.push({name: 'admin-login'}))
            }
        }
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

    .admin-user{
        display: flex;
        align-items: center;
    }
}
</style>