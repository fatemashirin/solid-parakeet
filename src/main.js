
// import { createApp } from 'vue'
// import App from './App.vue'
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import router from './router'
// createApp(App).use(router).mount('#app')



import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import routes from "./routes";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
