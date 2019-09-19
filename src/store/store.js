import Vue from 'vue'
import Vuex from 'vuex'
import stock from './Modules/stock.js'
import portfolio from './Modules/portfolio.js'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules:{
        stock,
        portfolio
    }
})