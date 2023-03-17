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
                <span>Hey <b>{{ username }}</b></span>
                <button class="btn btn-primary btn-sm" @click="goToDos" style="margin: 10px;">To Dos</button>
                <button class="btn btn-primary btn-sm" @click="logout" style="margin: 5px 5px 5px 0px;">Logout</button>
            </div>
        </div>
    </div>
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

        that.getUsername();
    },
    methods: {
        logout() {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
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
        getUsername() {
            let that = this;

            that.username = localStorage.getItem('username');
        },
        goToDos() {
            this.$router.push({ name: 'ToDo' });
        }
    }
}
</script>

<style></style>
