<template>
    <div>
        <sign-up-form v-on:novoUsuario="signup"></sign-up-form>
    </div>
</template>

<script>
    import SignUpForm from '../components/SignUpForm'
    import userService from '../services/user'

    export default {
        name: "SignUp",
        components: {
            SignUpForm
        },
        methods: {
            signup (user) {
                userService.signup(user)
                    .then((response) => {
                        console.log(response);
                        this.$router.push("/login");
                    })
                    .catch((response) => {
                         console.log("Erro: ");
                         console.log(response);
                    })
            }
        }
    }
</script>

<style scoped>

</style>
