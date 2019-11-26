<template>
    <div>

        <div class="form-row">
            <div class="col-md-4 mb-3 form-row">
                <label for="validationDefault01">Descrição</label>
                <input type="text" class="form-control" id="validationDefault01" v-model="category.description" required>
            </div>
        </div>

        <button class="btn btn-success mr-2" v-on:click="emitirEventoParaoPai">Salvar</button>
        <router-link to="/categorias">
            <button class="btn btn-danger">Cancelar</button>
        </router-link>

    </div>
</template>

<script>

    import Categoria from "../models/Categoria";

    export default {
        name: "FormCategoria",
        data() {
            return {
                category: new Categoria()
            }
        },
        methods: {
            emitirEventoParaoPai(){
                this.$emit('newCategory', this.category)
            }
        }
    }
</script>

<style scoped>

</style>