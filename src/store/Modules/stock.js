import  {stocks_db}  from '../../DB/db.js'
const state = {
    stockArray: [],
    flag: true,
    counter: 0
}

const getters = {
    stockArray: state => {
        return state.stockArray;
    }
}

const mutations = {

}

const actions = {
    updatePrice: (contex, arg) => {

        contex.state.stockArray.forEach(element => {
            element.price = Math.floor((Math.random() * (500 - 100)) + 100);
        });
 
        contex.dispatch('updateStockDB')


    },
    updateMyStock: (contex, arg) => {
        for (let i = 0; i < contex.state.stockArray.length; i++) {
            if (contex.state.stockArray[i].name === arg.name) {
                contex.state.stockArray[i].stock = contex.state.stockArray[i].stock - arg.stock;

            }
            contex.state.stockArray[i].itemsToBuy = 0;
        }
    },
    resetCart: contex => {
        for (let i = 0; i < contex.state.stockArray.length; i++) {
            contex.state.stockArray[i].itemsToBuy = 0;
        }
    },
    updateArr: (contex, arg) => {
        for (let i = 0; i < contex.state.stockArray.length; i++) {
            if (contex.state.stockArray[i].name === arg.name)
                contex.state.stockArray[i] = arg;
        }
    },
    loadStockDB: contex => {

        Vue.http.get('Stocks.json')
        .then(response => {
            return response.json();
        })
        .then(res => {
            let array =[];
            for(let key in res)
            {
                array.push(res[key]);
            }
            array = array.filter(e => {
                return e !== null;
            })
            contex.state.stockArray = array;
        })
 
    },
    updateStockDB: contex => {

        Vue.http.put('Stocks.json',contex.state.stockArray).
        then(Response => {
            console.log(Response)
        },error => {
            console.log(error)
        })

        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}