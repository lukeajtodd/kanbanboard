import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = `http://10.3.2.52:3333/api`;

new Vue({
  el: '#app',
  render: h => h(App)
})
