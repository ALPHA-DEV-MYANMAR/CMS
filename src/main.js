import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/aiz-core.css'
import './assets/css/vendors.css'
import './assets/css/bootstrap-rtl.min.css'
import './assets/css/custom-style.css'
createApp(App).use(store).use(router).mount('#app')