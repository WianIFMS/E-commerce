<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>
                    Cadastro
                    <small class="text-muted"> | Produtos</small>
                </h3>
            </div>
        </b-row>
        <products-list v-bind:products="products"></products-list>
    </div>
</template>

<script>
    import {BRow} from 'bootstrap-vue'
    import productService from "../services/produto"
    import ProductsList from "../components/ListaProduto";
    export default {
        name: "Produto",
        components: {ProductsList,BRow},
        data(){
            return {
                products: []
            }
        },
        methods: {
            loadProducts(){
                productService.list(this.$route.params.idCategory, this.$route.params.page)
                    .then((response) => {
                        this.products = response.data
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            }
        },
        mounted() {
            this.loadProducts()
        },
        watch: {
            '$route': 'loadProducts'
        }
    }
</script>

<style scoped>

</style>