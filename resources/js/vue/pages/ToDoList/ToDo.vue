<template>
    <page-header></page-header>
    <div class="container">
        <div class="row mt-5">
            <div class="col-10 d-flex justify-content-center align-items-center mx-auto">
                <input type="text" class="form-control form-control-sm" v-model="task_name" @keyup.enter="addTask">
                <button class="btn btn-primary btn-sm ms-2" @click="addTask">Add</button>
            </div>
            <span class="text-danger text-center" v-if="task_name_empty_flag" style="font-size: 12px;;">To add, you must provide a task.</span>
        </div>
        <div class="row mt-2">
            <div class="col-8 d-flex justify-content-center align-items-center mx-auto">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Tasks</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody v-for="(todo, index) in todos" :key="index">
                        <tr>
                            <td :style="{'background-color': white} ">{{ todo.tasks }}</td>
                            <td>
                                <label class="switch">
                                    <input type="checkbox" :value="todo.id">
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
import PageHeader from '../../components/PageHeader.vue';
export default {
    components: {
        PageHeader
    },
    data() {
        return {
            task_name: '',
            task_name_empty_flag: false,
            todos: [],
            white: 'white'
        }
    },
    mounted() {
        let that = this;

        that.getToDos();
    },
    methods: {
        addTask() {
            let that = this;

            if(that.task_name == '') {
                that.task_name_empty_flag = true;
            } else {
                axios
                    .post('/api/task/store', {
                        task_name: that.task_name
                    })
                    .then((response) => {
                        that.task_name = '';
                        that.getToDos();
                    });
            }
        },
        getToDos() {
            let that = this;

            axios
                .get('/api/toDoLists')
                .then((response) => {
                    that.todos = response.data.tasks;
                })
        }
    }
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
