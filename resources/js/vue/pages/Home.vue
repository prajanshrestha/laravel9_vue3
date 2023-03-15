<template lang="">
    <div class="col-12">
        <h3 class="text-center mt-5 text-danger">Bloggy</h3>
        <h1 class="text-center mt-5 text-danger">Welcome to Bloggy</h1>
        <h6 class="text-center mt-5 text-danger">Start creating your blog right away.</h6>
        <div class="d-flex justify-content-center align-items-center mt-2">
            <button @click="goToSignUp" class="btn btn-outline-danger bt-sm">Sign Up</button>
            <button @click="goToLogin" class="btn btn-outline-danger bt-sm ms-2">Log in</button>
        </div>

        <!-- authentication using google -->
        <div class="mt-2 d-flex justify-content-center">
            <button class="btn btn-danger bt-sm" @click.prevent="loginWithGoogle">Sign In With Google</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToSignUp() {
            this.$router.push({ name: "Register" });
        },
        goToLogin() {
            this.$router.push({ name: 'Login' });
        },
        loginWithGoogle() {
            console.log('login with google');
        }
    }
}
</script>

<style scoped>
</style>
