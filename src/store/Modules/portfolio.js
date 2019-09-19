const state = {
    mystockArray: [],
    funds: 10000
        
}

const getters = {
    stockArray: state => {
        return state.stockArray;
    }
}

const mutations = {

}

const actions = {
    addItem: (contex,arg) => {
        contex.state.mystockArray.push(arg)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}