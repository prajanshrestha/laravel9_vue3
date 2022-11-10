<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark ps-5">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">Home</router-link>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="text-white text-decoration-none me-3" to="/register">Register</router-link>
            </li>
            <li class="nav-item">
                <router-link class="text-white text-decoration-none" to="/login">Login</router-link>
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
