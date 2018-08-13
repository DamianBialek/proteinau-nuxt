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
        computed:{
            errorLogin(){
                return this.$store.getters.error
            },
            adminLogin(){
                return this.$store.getters.admin
            }
        },
        methods:{
            login(){
                this.$store.dispatch("adminSignIn", this.user)
            }
        },
        watch:{
            errorLogin(error){
                if(error)
                    this.$message({type: 'danger', message: error, date: false})
                else
                    this.$message("hideMessage")
            },
            adminLogin(admin){
                if(admin && !this.errorLogin)
                    this.$router.push({name: 'admin'})
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