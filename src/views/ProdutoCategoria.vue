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

        <b-table :items="categories" :fields="fields" striped responsive="md">
            <template v-slot:cell(Ação)="row" >
                <b-link :to="{name:'produto', params:{idCategory: row.item.id, page:1}}">
                    <b-button variant="primary">
                        Ver produtos
                    </b-button>
                </b-link>
            </template>
        </b-table>
    </div>
</template>

<script>

    import categoryService from "../services/categoria"
    import {BTable, BButton, BRow, BLink} from "bootstrap-vue"
    export default {
        name: "ProdutoCategoria",
        components: {BTable,BButton, BRow, BLink},
        data(){
            return {
                categories: [],
                fields: [
                    {key: "description", label: "Categoria"},
                    "Ação"
                ]
            }
        },
        methods: {
            loadCategories() {
                categoryService.list()
                    .then((response) => {
                        this.categories = response.data;
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            }
        },
        mounted() {
            this.loadCategories()
        }
    }
</script>

<style scoped>

</style>