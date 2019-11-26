<template>
    <b-card title="Sign Up"
            sub-title="Cadastre-se para acessar o sistema">
        <b-form>
            <b-form-group label="Nome:">
                <b-form-input
                        type="text"
                        required
                        v-model="user.name"
                        placeholder="Insira seu nome">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="E-mail:"
                    description="Informe um e-mail válido">
                <b-form-input
                        type="email"
                        required
                        v-model="user.email"
                        placeholder="Insira seu e-mail">
                </b-form-input>
            </b-form-group>

            <b-form-group
                    label="Senha:"
                    description="A senha deve possuir no minimo 6 caracteres">
                <b-form-input
                        type="password"
                        required
                        v-model="user.password"
                        placeholder="Insira sua senha">
                </b-form-input>
            </b-form-group>
        </b-form>
        <b-button v-on:click="emitirEventoParaOPai" variant="primary">Cadastrar</b-button>
    </b-card>
</template>

<script>
    import {BCard, BForm, BFormGroup, BFormInput, BButton} from 'bootstrap-vue'
    import User from '../models/User'
    export default {
        name: "SignUp",
        data(){
            return{
                user : new User()
            }
        },
        components: {
            BCard,
            BForm,
            BFormGroup,
            BFormInput,
            BButton
        },
        methods:{
            emitirEventoParaOPai(){
                this.$emit('novoUsuario',this.user)
            }
        }
    }
</script>

<style scoped>

</style>
