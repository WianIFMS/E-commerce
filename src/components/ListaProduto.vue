<template>
    <div>
        <b-link to="/products/category">Voltar</b-link>
        <b-link to="/product/create">
            <b-button size="md" variant="success" class="float-right mb-1">
                Novo
            </b-button>
        </b-link>
        <b-table striped hover :fields="fields" :items="products">
            <template v-slot:cell(Imagem)="row">
                <img v-if="row.item.img" width="50" height="50" :src="`data:image/png;base64,${row.item.img}`" />
                <p v-else>Sem Imagem</p>
            </template>
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
    import {BTable, BLink, BButton} from 'bootstrap-vue'
    export default {
        name: "ListaProduto",
        components: {
            BTable,
            BLink,
            BButton
        },
        data() {
            return {
                fields: [
                    {
                        key: 'id',
                        label: 'Ident.'
                    },
                    'Imagem',
                    {
                        key: 'description',
                        label: 'Descrição'
                    },
                    {
                        key: 'price',
                        label: 'Preço',
                        sortable:true
                    },
                    {
                        key: 'category.description',
                        label: 'Categoria'
                    },
                    'Ação'
                ]
            }
        },
        props: ['products']
    }
</script>

<style scoped>

</style>