import { createWebHashHistory, createRouter, createWebHistory } from "vue-router";
import Home from "./vue/pages/Home.vue";
import Register from "./vue/pages/Register.vue";
import Login from "./vue/pages/Login.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
