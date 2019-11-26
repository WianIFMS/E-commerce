<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>
                    Cadastro
                    <small class="text-muted"> | Nova Categoria</small>
                </h3>
            </div>
        </b-row>
        <form-categoria v-on:newCategory="createCategory"></form-categoria>
    </div>
</template>

<script>


    import FormCategoria from "../components/FormCategoria";
    import categoryService from "../services/categoria";
    export default {
        name: "CriarCategoria",
        components: {
            FormCategoria

        },
        methods: {
            createCategory(category){
                categoryService.create(category)
                    .then((response) => {
                        console.log(response)
                        this.$router.push('/categoria')
                    })
                    .catch((response) => {
                        console.log('Erro: ')
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>

</style>