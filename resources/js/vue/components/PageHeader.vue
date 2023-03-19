<template>
    <div class="card" style="margin: 0 10px 0 10px;">
        <div class="card-head d-flex justify-content-between">
            <h5 style="padding: 12px;">XYZ</h5>
            <div>
                <span>Hey <b>{{ username }}</b></span>
                <button class="btn btn-primary btn-sm" @click="goToDashboard" style="margin: 10px;">Dashboard</button>
                <button class="btn btn-primary btn-sm" @click="goToDos" style="margin: 5px 5px 5px -5px;">To Dos</button>
                <button class="btn btn-primary btn-sm" v-if="showLogoutBtn" @click="logout" style="margin: 5px 5px 5px 0px;">Logout</button>
            </div>
        </div>
    </div>
</template>
<script>
import store from '../../store/store';
export default {
    data() {
        return {
            username: ''
        }
    },
    props: {
        showLogoutBtn: {
            type: Boolean,
            default: false
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
        },
        goToDashboard() {
            this.$router.push({ name: 'Dashboard' });
        }
    }
}
</script>
<style>

</style>
