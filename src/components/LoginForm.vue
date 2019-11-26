<template>
    <b-card title="Login" sub-title="Insira seu e-mail e sua senha para se autenticar ao sistema">
        <b-form>
            <b-form-group
                    label="E-mail:">
                <b-form-input
                        type="email"
                        required
                        v-model="user.email"
                        placeholder="Insira seu e-mail">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Senha:">
                <b-form-input
                        type="password"
                        required
                        v-model="user.senha"
                        placeholder="Insira sua senha">
                </b-form-input>
            </b-form-group>
        </b-form>
        <b-button variant="primary" v-on:click="emitirEvento">Login</b-button>
    </b-card>
</template>

<script>
    import {BCard, BForm, BFormGroup, BFormInput, BButton} from 'bootstrap-vue'
    import User from '../models/User'

    export default {
        name: "Login",
        data() {
            return {
                user: new User()
            }
        },
        components: {
            BCard,
            BForm,
            BFormGroup,
            BFormInput,
            BButton
        },
        methods: {
            emitirEvento(){
                this.$emit('user',this.user);
            }
        }
    }
</script>

<style scoped>

</style>
