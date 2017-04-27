import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueSocketIO from 'vue-socket.io';

Vue.use(VueResource);
Vue.use(VueSocketIO, 'http://localhost:3333');
Vue.http.options.root = `http://localhost:3333/api`;
Vue.http.headers.common['Content-Type'] = `application/json`;

new Vue({
  el: '#app',
  render: h => h(App)
});
