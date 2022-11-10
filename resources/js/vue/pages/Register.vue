<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-6 mt-4">
            <h2 class="text-center">Register</h2>
            <p class="text-danger" v-for="error in errors" :key="error">
                <span v-for="err in error" :key="err">
                    {{ err }}
                </span>
            </p>
            <form @submit.prevent="register">
                 <div class="form-group">
                    <label for="name">Name</label>
                    <input type="name" id="name" class="form-control" v-model="form.name">
                </div> <br>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" class="form-control" v-model="form.email">
                </div> <br>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" v-model="form.password">
                </div> <br>
                <div class="form-group">
                    <label for="c_password">Confirm Password</label>
                    <input type="password" id="c_password" class="form-control" v-model="form.c_password">
                </div> <br>
                <button type="submit" class="btn btn-primary">Register</button>
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
                    if(response.data.success) {
                        localStorage.setItem("token", response.data.data.token);
                        this.$router.push({ name: "Dashboard" });
                    }
                })
                .catch((error) => {
                    this.errors = error.response.data.message;
                })
        }
    }
}
</script>

<style>

</style>
