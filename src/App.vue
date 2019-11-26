<template>
    <div id="app">
        <vue-progress-bar></vue-progress-bar>
        <nav-bar></nav-bar>
        <b-container fluid>
            <router-view/>
        </b-container>
    </div>
</template>

<script>
    import {BContainer} from 'bootstrap-vue'
    import NavBar from './components/NavBar'

    export default {
        name: "App",
        components: {
            BContainer,
            NavBar
        }
    }
</script>

<style>
    .container-fluid {
        margin-top: 20px;
    }
</style>
