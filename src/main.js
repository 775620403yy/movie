import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});

import Scroller from './components/Scroller.vue'
Vue.component('Scroller',Scroller);
import Loading from './components/Loading.vue'
Vue.component('Loading',Loading);

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
