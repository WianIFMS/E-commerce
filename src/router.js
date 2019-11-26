import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                authRequired: true
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/categoria',
            name: 'categoria',
            component: () => import(/* webpackChunkName: "about" */ './views/Categoria.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/category/create',
            name: 'criarCategotia',
            component: () => import(/* webpackChunkName: "about" */ './views/CriarCategoria.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/products/category',
            name: 'produtoCategoria',
            component: () => import(/* webpackChunkName: "about" */ './views/ProdutoCategoria.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/products/:idCategory/:page',
            name: 'produto',
            props: true,
            component: () => import(/* webpackChunkName: "about" */ './views/Produto.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/product/create',
            name: 'criarProduto',
            component: () => import(/* webpackChunkName: "about" */ './views/CriarProduto.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
            meta: {
                authRequired: false
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue'),
            meta: {
                authRequired: false
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const status = store.getters.status; //sessionStorage.getItem("authUser")
    const authRequired = to.meta.authRequired;

    if (!authRequired) {
        return next();
    }
    if (status == 'AUTHENTICATED') {
        return next();
    }
    next("/login");
})

export default router;

