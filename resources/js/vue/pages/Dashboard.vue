<template>
    <!-- <hr>
    <div>
        <product-list-one></product-list-one>
    </div>
    <div class="mt-5">
        <product-list-two></product-list-two>
    </div> -->
    <page-header :showLogoutBtn=true></page-header>
</template>

<script>
import ProductListOne from './ProductListOne.vue';
import ProductListTwo from './ProductListTwo.vue';
import store from '../../store/store';
import PageHeader from '../components/PageHeader.vue';
export default {
    components: {
        ProductListOne,
        ProductListTwo,
        PageHeader
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style></style>
