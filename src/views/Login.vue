<template>
    <div>
        <login-form @user="login"></login-form>
    </div>
</template>

<script>
    import LoginForm from '../components/LoginForm'

    export default {
        name: "Login",
        components: {
            LoginForm
        },
        methods: {
            login(user) {
                this.$store.dispatch('login',user)
                    .then((response)=>{
                        console.log(response);
                        this.$router.push("/dashboard");
                    })
                    .catch((response)=>{
                        console.log(response);
                    })
            }
        }
    }
</script>

<style scoped>

</style>
