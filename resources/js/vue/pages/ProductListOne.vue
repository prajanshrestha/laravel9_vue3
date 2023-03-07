<template lang="">
    <div v-for="(product, index) in products" :key="index">
        {{ product.name }} - ${{ product.price }}
    </div>
    <button @click="reducePrice">Reduce Price</button>
</template>
<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    methods: {
        reducePrice() {
            this.$store.commit('reducePrice');
        }
    }
}
</script>
<style lang="">

</style>
