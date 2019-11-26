import http from './config.js'
import store from "../store";

export default {
    list: (category, page) => {
        return http.get('/product/list/'+category+"/"+page)
    },
    create: (product) => {
        const user = store.getters.authUser

        const headers = {
            Authorization: 'Bearer '+user.token
        };

        return http.post('/product', product, {headers:headers})
    }
}