<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-3" label="Categoria:" label-for="input-3">
                <b-form-select
                        id="input-3"
                        v-model="product.category.id"
                        :options="options"
                        required
                >
                    <template v-slot:first>
                        <option value="" disabled>-- Selecione uma opção abaixo --</option>
                    </template>
                </b-form-select>
            </b-form-group>

            <b-form-group
                    id="input-group-1"
                    label="Descrição:"
                    label-for="input-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="product.description"
                        type="text"
                        required
                        placeholder="Informe a descrição"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Preço:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="product.price"
                        type="number"
                        required
                        placeholder="Informe o preço"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Preço Promocional:" label-for="input-4">
                <b-form-input
                        id="input-4"
                        v-model="product.promotionalPrice"
                        type="number"
                        required
                        placeholder="Informe o preço promocional"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Marca:" label-for="input-5">
                <b-form-input
                        id="input-5"
                        v-model="product.brand"
                        type="text"
                        required
                        placeholder="Informe a marca"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Quantidade:" label-for="input-6">
                <b-form-input
                        id="input-6"
                        v-model="product.quantity"
                        type="number"
                        required
                        placeholder="Informe a quantidade"
                ></b-form-input>
            </b-form-group>

            <b-form-file v-on:change="loadFile" class="mb-2"></b-form-file>

            <b-button type="submit" class="mr-1" variant="primary">Salvar</b-button>
            <b-button type="reset" variant="secondary">Limpar</b-button>
        </b-form>
    </div>
</template>

<script>
    import Product from "../models/Produto";
    import {BForm, BFormGroup, BFormInput, BFormSelect, BButton, BFormFile} from 'bootstrap-vue'
    import categoryService from "../services/categoria";

    export default {
        name: "FormProduto",
        components: {
            BForm,
            BFormGroup,
            BFormInput,
            BFormSelect,
            BButton,
            BFormFile
        },
        data() {
            return {
                product: new Product(),
                categories: [],
                options: [],
                show: true,
                previewImage:true,
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                this.$emit('save', this.product)
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.product.description = ''
                this.product.price = ''
                this.product.category = {}
                this.product.promotionalPrice = 0
                this.product.brand = ''
                this.product.quantity = 0
                // Trick to reset/clear native browser form validation state
                // this.show = false
            },
            loadCategories() {
                categoryService.list()
                    .then((response) => {
                        this.categories = response.data;
                        this.categories.forEach(this.loadOptions)
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            },
            loadOptions(item) {
                this.options.push({'value' : item.id, 'text' : item.description})
            },
            loadFile(event){
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0])
                reader.onloadend = () => {
                    this.product.img = reader.result
                    this.product.img = this.product.img.replace('data:image/jpeg;base64,', '')
                    this.product.img = this.product.img.replace('data:image/png;base64,', '')
                    this.product.img = this.product.img.replace('data:image/jpg;base64,', '')
                }
            }
        },
        mounted() {
            this.loadCategories()
        }
    }
</script>

<style scoped>

</style>