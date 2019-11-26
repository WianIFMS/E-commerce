import Vue from 'vue'
import Vuex from 'vuex'
import userSerice from './services/user'

Vue.use(Vuex)

const INITIAL = 'INITIAL'
const AUTHENTICATED = 'AUTHENTICATED'
const NO_AUTHENTICATED = 'NO_AUTHENTICATED'
const AUTHENTICATION_REJECTED = 'AUTHENTICATION_REJECTED'

export default new Vuex.Store({
    state: {
        authUser: {},
        status: INITIAL
    },
    getters: {
        authUser: (state) => {
            return state.authUser
        },
        status: (state) => {
            return state.status
        }
    },
    mutations: {
        [AUTHENTICATED](state, user) {
            state.authUser = user
            state.status = AUTHENTICATED
        },
        [NO_AUTHENTICATED](state) {
            state.authUser = {}
            state.status = NO_AUTHENTICATED
        },
        [AUTHENTICATION_REJECTED](state) {
            state.authUser = {}
            state.status = AUTHENTICATION_REJECTED
        }
    },
    actions: {
        login({commit}, user) {
            return userSerice.login(user.email, user.senha)
                .then((response) => {
                    const authUser = response.data;
                    sessionStorage.setItem('authUser', JSON.stringify(authUser));
                    commit(AUTHENTICATED, authUser);
                    return response;
                })
                .catch((response) => {
                    commit(AUTHENTICATION_REJECTED);
                    throw response;
                })
        },
        logout({commit}) {
            sessionStorage.removeItem('authUser')
            commit(NO_AUTHENTICATED)
        }
    }
})
