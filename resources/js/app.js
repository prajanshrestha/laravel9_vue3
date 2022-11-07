import './bootstrap';
import {createApp} from 'vue'
import App from './vue/App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';

createApp(App)
    .use(router)
    .mount("#app")
