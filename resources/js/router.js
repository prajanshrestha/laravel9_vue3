import { createWebHashHistory, createRouter, createWebHistory } from "vue-router";
import Home from "./vue/pages/Home.vue";
import Register from "./vue/pages/Register.vue";
import Login from "./vue/pages/Login.vue";
import Dashboard from "./vue/pages/Dashboard.vue";
import ToDo from './vue/pages/ToDoList/ToDo.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/to-do",
        name: "ToDo",
        component: ToDo,
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
    if(to.meta.requiresAuth && !localStorage.getItem("token")) {
        return { name: "Login"};
    }
    if(to.meta.requiresAuth == false && localStorage.getItem("token")) {
        return { name: "Dashboard"};
    }
});

export default router;
