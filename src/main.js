import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import hostIp from './serverIp'

Vue.use(VueResource)
Vue.http.options.root = `http://${hostIp}:3333/api`;

new Vue({
  el: '#app',
  render: h => h(App)
})
