<template>
    <div class="admin-login-background">
        <div class="form-box">
        <message-notification />
            <form @submit.prevent="login">
                <h1 class="h3 mb-3 font-weight-normal text-right">Admin</h1>
                <div class="form-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="user.password">
                </div>
                <button class="btn admin-btn btn-lg btn-block" type="submit">Zaloguj</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {setToken} from "@/utils/auth";
    export default {
        name: "index",
        data(){
            return {
                user: {
                    'email': '',
                    'password': ''
                }
            }
        },
        methods:{
            login(){
                this.$api.adminLogin(this.user)
                    .then(response => {
                        if(response.success === true && response.token) {
                            setToken(response.token)
                            this.$router.push({name: 'admin'})
                        }else{
                            this.$message({type: 'danger', message: response.error, date: false})
                        }
                    })
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style lang="scss">
    @import '@/assets/admin.scss';
    .admin-login-background{
        height: 100%;
        background-color: $primaryBackgroundColor;
        display: flex;
        align-items: center;

        .form-box{
            width: 100%;
            max-width: 350px;
            padding: 10px;
            margin: auto;
            color: $primaryFontColor;
        }
    }
</style>