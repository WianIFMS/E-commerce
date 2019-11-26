<template>
    <div>

        <b-table :items="categories" :fields="fields" striped responsive="md">
            <template v-slot:cell(Ação)="row" >
                <b-button size="md" variant="primary" class="mr-2">
                    Editar
                </b-button>
                <b-button size="md" variant="danger">
                    Excluir
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>

    import {BTable, BButton} from 'bootstrap-vue'
    export default {
        name: "ListaCategoria",
        data() {
            return {
                fields: [
                    {key: "id", label: "ID"},
                    {key: "description", label: "Descrição"},
                    "Ação"
                ]
            }
        },
        components: {
            BTable,
            BButton
        },
        props: [
            'categories'
        ]
    }
</script>

<style scoped>
    table thead {
        background-color: lightgrey;
    }
</style>