import './bootstrap';
import {createApp} from 'vue'
import App from './vue/App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
// import { store } from "./store/store";

createApp(App)
    .use(router)
    // .use(store)
    .mount("#app")
