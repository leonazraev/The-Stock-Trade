
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
            let newPrice ;
            let newQuantity;
            newQuantity = parseInt(prevElement.stock) + parseInt(arg.stock);
            newPrice = ((parseInt(arg.price) * parseInt(arg.stock)) + (parseInt(prevElement.price) * parseInt(prevElement.stock))) / newQuantity;
            arg.price = newPrice;
            arg.stock = newQuantity;
        }
        arg.index = contex.state.mystockArray.length;
        contex.state.mystockArray.push(arg);
        console.log(contex.getters.stockArray);
            
    },
    sellItem: (contex,arg) => {
        contex.state.funds += arg.price * arg.stock;
        contex.state.mystockArray = contex.state.mystockArray.filter(element => {
            return !(element.name === arg.name)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}