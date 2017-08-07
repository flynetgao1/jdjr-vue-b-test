// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Config from './config'

// 在这里引入vuex的store
import store from './store'

let Configs = Config.Config;


// ajax 请求
import axios from 'axios'
axios.defaults.baseURL = Configs.debug ? "//localhost:8080/static" : "";
axios.defaults.headers.common['Authorization'] = Configs.AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let Axios = axios.create({
    timeout: 1000,
    method: Configs.debug ? "get" : "post"
});
// Vue.use(axios);
Vue.$http = Axios


import Modal from './plugins/dialog'

import './assets/css/plugins/modal/1.0.0/index.css'

Vue.component('Modal', Modal);

Vue.prototype.$Modal = Modal;

Vue.config.productionTip = false


/* eslint-disable no-new */
const vue = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})