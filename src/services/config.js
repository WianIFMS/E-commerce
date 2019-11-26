import axios from 'axios'
import app from '../main'

const http = axios.create({
    baseURL: "https://ecommerce-cpw.herokuapp.com/rest"
});

http.interceptors.request.use(config => {
    app.$Progress.start(); // for every request start the progress
    return config;
});

http.interceptors.response.use(response => {
    app.$Progress.finish(); // finish when a response is received
    return response;
}, response => {
    app.$Progress.fail(); // finish when a response is received
    throw response;
});

export default http;
