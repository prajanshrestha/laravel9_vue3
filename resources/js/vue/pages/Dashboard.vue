<template>
  <div class="container">
    <h2>Dashboard : </h2>
    <button type="button" class="btn btn-dark mt-2" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem("token");
            window.dispatchEvent(new CustomEvent('foo-key-localstorage-changed', {
                detail: {
                    storage: ''
                }
            }));
            this.$router.push({ name: "Login" });
        }
    }
}
</script>

<style>

</style>
