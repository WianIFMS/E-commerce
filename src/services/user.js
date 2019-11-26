import http from './config'

export default {
    signup: (user) => {
        return http.post("/user/signup", user);
    },
    login: (email, senha) => {
        const credentials = btoa(email+":"+senha);
        const headers = {
            'Authorization': 'Basic '+credentials
        };
        return http.get("/user/login",{headers:headers});
    }
}
