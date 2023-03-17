<template>
    <div class="container">
        <h4 class="text-center mt-2">To Dos</h4>
        <div class="row">
            <div class="col-10 d-flex justify-content-center align-items-center mx-auto">
                <input type="text" class="form-control form-control-sm">
                <button class="btn btn-primary btn-sm ms-2">Add</button>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-8 d-flex justify-content-center align-items-center mx-auto">
                <!-- <span>Take out the trash.</span>
                <div class="ms-2">
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                </div> -->
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Tasks</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Take out the trash.</td>
                            <td>
                                <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 23px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
