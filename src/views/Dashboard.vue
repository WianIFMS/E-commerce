<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>Dashboard
                    <small class="text-muted"> | resumo</small>
                </h3>
            </div>


        </b-row>
        <div id="dashboard">
            {{ info }}
        </div>
        <div class="container">

            <Chart :chart-data="datacollection"></Chart>
            <chart v-if="loaded" v-bind:chartdata="chartData"></chart>

        </div>
    </div>
</template>

<script>

    import {BRow} from 'bootstrap-vue'
    import { Bar } from 'vue-chartjs'
    import Chart from '../services/venda'

    export default {
        extends: Bar,
        name: 'dashboard',
        components: {
            BRow,
            Chart
        },
        data() {
            return {
                data:[],
                datacollection: null,
                loaded: false,
                vendas: []
            }
        },
        mounted() {
            this.fillData()

        },
        methods: {
            fillData() {
                this.datacollection = {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                    datasets: [
                        {
                            label: 'Total vendas por mês - ano 2019 ',

                            data: [this.data]
                        }
                    ]
                }
            },
           lista(){
               Chart.list().then((respose)=>{
                   this.data = respose.data
               })
                   .catch((response) => {
                       console.log(response.data)
                   })
            }
        }
    }
</script>

<style scoped>

</style>
