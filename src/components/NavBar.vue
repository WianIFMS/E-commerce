<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="secondary">
            <b-navbar-brand to="/">SisCommerce</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-show="showFunctions">
                    <b-nav-item to="/dashboard">Dashboard</b-nav-item>
                    <b-nav-item-dropdown text="Cadastros">
                        <b-dropdown-item to="/categoria">Categorias</b-dropdown-item>
                        <b-dropdown-item to="/products/category">Produtos</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item to="/about">About</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form v-show="!showFunctions">
                        <b-button variant="success" to="/login">Login</b-button>
                        <b-button variant="info" to="/signup">Signup</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown right v-show="showFunctions">
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User: {{user.email}}</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item v-on:click="logout">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import {
        BNavbar,
        BNavbarBrand,
        BNavbarToggle,
        BNavForm,
        BNavItem,
        BNavbarNav,
        BNavItemDropdown,
        BCollapse,
        BDropdownItem,
        BButton
    } from 'bootstrap-vue'

    export default {
        name: "NavBar",
        components: {
            BNavbar,
            BNavbarBrand,
            BNavbarToggle,
            BNavbarNav,
            BNavItemDropdown,
            BNavItem,
            BNavForm,
            BCollapse,
            BDropdownItem,
            BButton
        },
        computed:{
            user: function(){
                return this.$store.getters.authUser;
            },
            showFunctions: function () {
                const status = this.$store.getters.status;
                if(status == 'AUTHENTICATED'){
                    return true;
                }
                return false;
            }
        },
        methods: {
            logout: function(){
                this.$store.dispatch('logout');
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>
