<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark ps-5">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">Home</router-link>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="text-white text-decoration-none" to="/register">Register</router-link>
            </li>
            <li class="nav-item">
                <router-link class="text-white text-decoration-none ms-3" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link class="text-white text-decoration-none ms-3" :to="{ name: 'Dashboard' }">Dashboard</router-link>
            </li>
        </ul>
    </nav>

    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>
