<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-6 mt-4">
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
            }
        }
    },
    methods: {
        login() {
            let that = this;
            axios
                .post("/api/login", {
                    form: that.form
                })
                .then((response) => {
                    console.log(response);
                })
        }
    }
}
</script>

<style>

</style>
