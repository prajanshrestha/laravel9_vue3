<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-6 mt-5">
            <!-- <h3 class="text-center">Login {{ getcount }} {{  $store.state.count }}</h3> -->
            <h3 class="text-center">Login - {{  $store.state.count }}</h3>
            <form @submit.prevent="login" class="mt-2">
                <div class="form-group">
                    <h6 class="" for="email">Email Address</h6>
                    <input type="email" id="email" class="form-control" v-model="form.email" style="margin-top: -5px;">
                </div>
                <div class="form-group mt-3">
                    <h6 class="" for="password">Password</h6>
                    <input type="password" id="password" class="form-control" v-model="form.password" style="margin-top: -5px;">
                    <span v-if="error" class="" style="font-size: 12px;">{{ error }}</span>
                </div>
                <div class="row">
                    <div class="col-8 mt-3">
                        <h6 class="f-size">Don't have an account? <span class="go-to-signup text-primary" @click="goToRegister">Sign Up</span></h6>
                    </div>
                    <div class="col-4">
                        <button type="submit" class="btn btn-primary mt-2 float-end">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import store from "../../store/store"

export default {
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            error: ""
        }
    },
    // computed: mapGetters(["getcount"]),

    methods: {
        // ...mapActions(["login"]),

        login() {
            store.dispatch('login')
            // axios
            //     .post("/api/login", {
            //         form: this.form
            //     })
            //     .then((response) => {
            //         if(response.data.success) {
            //             localStorage.setItem("token", response.data.data.token);
            //             // window.dispatchEvent(new CustomEvent('foo-key-localstorage-changed', {
            //             //     detail: {
            //             //         storage: localStorage.getItem('token')
            //             //     }
            //             // }));
            //             this.$router.push({ name: "Dashboard" });
            //         } else {
            //             this.error = response.data.message;
            //         }
            //     })
        },
        goToRegister() {
            this.$router.push({ name: 'Register' });
        }
    }
}
</script>

<style scoped>
.f-size {
    font-size: 12px;
}
.go-to-signup:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>
