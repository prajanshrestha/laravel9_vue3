<template lang="">
    <div v-for="(product, index) in saleProducts" :key="index">
        {{ product.name }} - ${{ product.price }}
    </div>
</template>
<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        saleProducts() {
            return this.$store.getters.saleProducts;
        }
    }
}
</script>
<style lang="">

</style>
