import './bootstrap';
import {createApp} from 'vue'
import App from './vue/App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import store from "./store/store";
import GoogleAuth from 'google-auth-library';

// const {GoogleAuth} = require('google-auth-library');

const gauthOption = {
    clientId: '844226225965-hdg9j43tr0q8b51l2jrcem11c2au7smb.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}

createApp(App)
    .use(router)
    .use(store)
    .use(GoogleAuth, gauthOption)
    .mount("#app")
