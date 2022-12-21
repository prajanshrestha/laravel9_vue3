<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-6 mt-4">
            <h2 class="text-center">Login</h2>
            <p v-if="error" class="text-danger">{{ error }}</p>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" class="form-control" v-model="form.email">
                </div> <br>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" v-model="form.password">
                </div> <br>
                <button type="submit" class="btn btn-primary">Login</button>
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
                email: "",
                password: ""
            },
            error: ""
        }
    },
    methods: {
        login() {
            axios
                .post("/api/login", {
                    form: this.form
                })
                .then((response) => {
                    if(response.data.success) {
                        localStorage.setItem("token", response.data.data.token);
                        window.dispatchEvent(new CustomEvent('foo-key-localstorage-changed', {
                            detail: {
                                storage: localStorage.getItem('token')
                            }
                        }));
                        this.$router.push({ name: "Dashboard" });
                    } else {
                        this.error = response.data.message;
                    }
                })
        }
    }
}
</script>

<style>

</style>
