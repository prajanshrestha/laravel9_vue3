<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6 mt-5">
                <h3 class="text-center">Register</h3>

                <!-- errors -->
                <!-- <p class="" v-for="error in errors" :key="error">
                <span v-for="err in error" :key="err">
                    {{ err }}
                </span>
            </p> -->
                <form @submit.prevent="register" class="mt-2">
                    <div class="form-group">
                        <h6 class="" for="name">Name</h6>
                        <input type="name" id="name" class="form-control" v-model="form.name" style="margin-top: -5px;">
                        <span class="f-size" v-if="errors.name">The name field is required.</span>
                    </div>
                    <div class="form-group mt-3">
                        <h6 class="" for="email">Email Address</h6>
                        <input type="email" id="email" class="form-control" v-model="form.email" style="margin-top: -5px;">
                        <span class="f-size" v-if="errors.email">The email address field is required.</span>
                    </div>
                    <div class="form-group mt-3">
                        <h6 class="" for="password">Password</h6>
                        <input type="password" id="password" class="form-control" v-model="form.password"
                            style="margin-top: -5px;">
                        <span class="f-size" v-if="errors.password">The password field is required.</span>
                    </div>
                    <div class="form-group mt-3">
                        <h6 class="" for="c_password">Confirm Password</h6>
                        <input type="password" id="c_password" class="form-control" v-model="form.c_password"
                            style="margin-top: -5px;">
                        <span class="f-size" v-if="errors.password && errors.c_password">The confirm password field is required.</span>
                        <span class="f-size" v-if="!errors.password && errors.c_password">The password and confirm password fields must required.</span>
                    </div>
                    <div class="row">
                        <div class="col-8 mt-3">
                            <h6 class="f-size">Already have an account? <span class="go-to-login text-primary" @click="goToLogin">Login</span></h6>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary mt-2 float-end">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                c_password: ""
            },
            errors: []
        }
    },
    methods: {
        register() {
            axios
                .post("/api/register", {
                    form: this.form
                })
                .then((response) => {
                    if (response.data.success) {
                        localStorage.setItem("token", response.data.data.token);
                        this.$router.push({ name: "Dashboard" });
                    }
                })
                .catch((error) => {
                    this.errors = error.response.data.message;
                })
        },
        goToLogin() {
            this.$router.push({ name: 'Login' });
        }
    }
}
</script>

<style scoped>
.f-size {
    font-size: 12px;
}
.go-to-login:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>
