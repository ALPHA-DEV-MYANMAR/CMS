import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/aiz-core.css'
import './assets/css/vendors.css'
import './assets/css/bootstrap-rtl.min.css'
import './assets/css/custom-style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'



createApp(App).use(store).use(router).mount('#app')