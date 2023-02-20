<template>
  <div class="container">
    <h2>Dashboard : </h2>
    <button type="button" class="btn btn-dark mt-2" @click="logout">Logout</button>

    <hr>

    <product-list-one :products='products'></product-list-one>
    <product-list-two :products='products'></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './ProductListOne.vue';
import ProductLisTwo from './ProductListTwo.vue';
export default {
    data() {
        return {
            products: [
                { name: 'Banana Skin', price: 20 },
                { name: 'Shiny Star', price: 40 },
                { name: 'Green Shells', price: 60 },
                { name: 'Red Shells', price: 80 },
            ]
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
