<template>
    <!-- <hr>
    <div>
        <product-list-one></product-list-one>
    </div>
    <div class="mt-5">
        <product-list-two></product-list-two>
    </div> -->

    <div class="card" style="margin: 0 10px 0 10px;">
        <div class="card-head d-flex justify-content-between">
            <h5 style="padding: 12px;">Dashboard</h5>
            <div>
                <span>Hey <b>{{ $store.state.username }}</b></span>
                <button class="btn btn-primary btn-sm" @click="logout" style="margin: 10px;">Logout</button>
            </div>
        </div>

    </div>


    <!-- <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div> -->
</template>

<script>
import ProductListOne from './ProductListOne.vue';
import ProductListTwo from './ProductListTwo.vue';
import store from '../../store/store';
export default {
    components: {
        ProductListOne, ProductListTwo
    },
    data() {
        return {
            username: ''
        }
    },
    mounted() {
        let that = this;
    },
    methods: {
        logout() {
            localStorage.removeItem("token");
            // window.dispatchEvent(new CustomEvent('foo-key-localstorage-changed', {
            //     detail: {
            //         storage: ''
            //     }
            // }));
            store.state.username = '';
            if(store.state.error) {
                store.state.error = '';
            }
            this.$router.push({ name: "Login" });
        },
    }
}
</script>

<style></style>
