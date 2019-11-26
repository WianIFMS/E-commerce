import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

Vue.config.productionTip = false

const options = {
  color: '#bffaf3',
  failedColor: '#eb2832',
  thickness: '5px'
};

Vue.use(VueProgressBar, options);

const app = new Vue({
  router,
  store,
  beforeCreate(){
      const authUser = JSON.parse(sessionStorage.getItem('authUser'));
      if(authUser){
          this.$store.commit('AUTHENTICATED',authUser);
          this.$router.push("/dashboard")
      }
  },
  render: h => h(App)
}).$mount('#app')

export default app;
