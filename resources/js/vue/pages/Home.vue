<template lang="">
    <div class="col-12">
        <h3 class="text-center mt-5">Todo App</h3>
        <div class="d-flex justify-content-center align-items-center mt-2">
            <button @click="goToSignUp" class="btn btn-primary">Sign Up</button>
            <button @click="goToLogin" class="btn btn-primary ms-2">Log in</button>
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
        }
    }
}
</script>

<style scoped>
</style>
