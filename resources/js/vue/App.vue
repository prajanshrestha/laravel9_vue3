<template>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link>

    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>
