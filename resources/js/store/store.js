import { createStore } from 'vuex';

const store = createStore({
    state: {
        products: [
            { name: 'Banana Skin', price: 20 },
            { name: 'Shiny Star', price: 40 },
            { name: 'Green Shells', price: 60 },
            { name: 'Red Shells', price: 80 },
        ],
        name: '',
        count: 10
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
        getcount: (state) => {
            return state.count;
        }
    },
    actions: {
        login(context) {
            context.commit('increment')
        }
    },
    mutations: {
        reducePrice: (state) => {
            state.products.forEach((product) => {
                product.price -= 1;
            });
        },
        increment(state) {
            state.count++
        }
    }
});

export default store;
