<template>
  <div class="container">
    <h2>Dashboard : </h2>
    <button type="button" class="btn btn-dark mt-2" @click="logout">Logout</button>

    <!-- <hr>
    <div>
        <product-list-one></product-list-one>
    </div>
    <div class="mt-5">
        <product-list-two></product-list-two>
    </div> -->
  </div>
</template>

<script>
import ProductListOne from './ProductListOne.vue';
import ProductListTwo from './ProductListTwo.vue';
export default {
    components: {
        ProductListOne, ProductListTwo
    },
    data() {
        return {

        }
    },
    methods: {
        logout() {
            localStorage.removeItem("token");
            // window.dispatchEvent(new CustomEvent('foo-key-localstorage-changed', {
            //     detail: {
            //         storage: ''
            //     }
            // }));
            this.$router.push({ name: "Login" });
        }
    }
}
</script>

<style>

</style>
