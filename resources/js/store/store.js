import { createStore } from 'vuex';
import router from '../router';

const store = createStore({
    state: {
        products: [
            { name: 'Banana Skin', price: 20 },
            { name: 'Shiny Star', price: 40 },
            { name: 'Green Shells', price: 60 },
            { name: 'Red Shells', price: 80 },
        ],
        username: '',
        error: '',
    },
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map((product) => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return saleProducts;
        },
        // getcount: (state) => {
        //     return state.count;
        // }
    },
    actions: {
        login(context, payload) {
        axios
            .post("/api/login", {
                form: payload
            })
            .then((response) => {
                if(response.data.success) {
                    context.commit('login', response.data.data);
                    router.push({ name: 'Dashboard' });
                } else {
                    context.commit('loginErrorMessage', response.data.message);
                }
            })
        }
    },
    mutations: {
        reducePrice: (state) => {
            state.products.forEach((product) => {
                product.price -= 1;
            });
        },
        login(state, form) {
            localStorage.setItem("token", form.token);
            localStorage.setItem("username", form.name);
            state.username = form.name;
        },
        loginErrorMessage(state, payload) {
            state.error = payload;
        }
    }
});

export default store;
