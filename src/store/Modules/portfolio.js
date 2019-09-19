
const state = {
    mystockArray: [],
    funds: 10000

}

const getters = {
    mystockArray: state => {
        return state.mystockArray;
    },
    funds: state => {
        return state.funds;
    }
}

const mutations = {

}

const actions = {
    addItem: (contex, arg) => {
        contex.dispatch('updateMyStock',arg)
        contex.state.funds = contex.state.funds - (arg.price * arg.stock);
        var prevElement;
        contex.state.mystockArray = contex.state.mystockArray.filter(element => {
            if (element.name === arg.name) {
                prevElement = element;
            }
            return !(element.name === arg.name)
        })
        if (prevElement !== undefined) {
            let newPrice;
            let newQuantity;
            newQuantity = prevElement.stock + arg.stock;
            newPrice = ((arg.price * arg.stock) + (prevElement.price * prevElement.stock)) / newQuantity;
            arg.price = newPrice;
            arg.stock = newQuantity;
        }
        arg.index = contex.state.mystockArray.length;
        contex.state.mystockArray.push(arg);
        console.log(contex.getters.stockArray);
        
        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}