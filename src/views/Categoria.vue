<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>
                    Cadastro
                    <small class="text-muted"> | Categorias</small>
                </h3>
            </div>
        </b-row>

        <router-link to="/category/create">
            <b-button variant="primary">Nova</b-button>
        </router-link>

        <categorias-list v-bind:categories="categories"></categorias-list>
    </div>
</template>

<script>
    import CategoriasList from "../components/ListaCategoria";
    import categoryService from "../services/categoria";
    import {BButton} from 'bootstrap-vue'
    export default {
        name: "Categoria",
        components: {
            CategoriasList,
            BButton
        },
        data() {
            return {
                categories: []
            }
        },
        mounted() {
            this.loadCategories()
        },
        methods: {
            loadCategories() {
                categoryService.list()
                    .then((response) => {
                        this.categories = response.data;
                        this.categories.sort(this.compare)
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            },

            compare(a,b) {
                if (a.id < b.id)
                    return -1;
                if (a.id > b.id)
                    return 1;
                return 0;
            }
        },
        watch: {
            '$route': 'loadCategories'
        }
    }
</script>

<style scoped>

</style>