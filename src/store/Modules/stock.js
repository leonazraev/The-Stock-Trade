const state = {
    stockArray: [
        {
            name: "B.M.W",
            stock: 100,
            price: 50,
            img: "https://imgur.com/vPfxVZN.png",
            index: 1,
            itemsToBuy: 0
        },
        {
            name: "Google",
            stock: 200,
            price: 30,
            img: "https://imgur.com/YtHvWp9.png",
            index: 2,
            itemsToBuy: 0
        },
        {
            name: "Amazon",
            stock: 300,
            price: 40,
            img: "https://imgur.com/xMjVpyc.png",
            index: 3,
            itemsToBuy: 0
        },
        {
            name: "Twitter",
            stock: 350,
            price: 100,
            img: "https://imgur.com/4S5gdYO.png",
            index: 4,
            itemsToBuy: 0
        },
        {
            name: "Apple",
            stock: 350,
            price: 100,
            img: "https://imgur.com/YBTAHHb.png",
            index: 5,
            itemsToBuy: 0
        },
        {
            name: "Facebook",
            stock: 350,
            price: 100,
            img: "https://imgur.com/vwr4B4y.png",
            index: 6,
            itemsToBuy: 0
        },
        {
            name: "Macdonalds",
            stock: 350,
            price: 100,
            img: "https://imgur.com/rAkN8JB.png",
            index: 7,
            itemsToBuy: 0
        },
    ],
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

    },
    updateMyStock: (contex,arg) => {
        for(let i=0; i< contex.state.stockArray.length ; i++)
        {
            if(contex.state.stockArray[i].name === arg.name)
            {
                contex.state.stockArray[i].stock = contex.state.stockArray[i].stock - arg.stock;
               
            }
            contex.state.stockArray[i].itemsToBuy = 0;
        }
    },
    resetCart: contex => {
        for(let i=0; i< contex.state.stockArray.length ; i++)
        {
            contex.state.stockArray[i].itemsToBuy = 0;
        }
    },
    updateArr: (contex,arg) => {
        for(let i=0; i< contex.state.stockArray.length ; i++)
        {
            if(contex.state.stockArray[i].name === arg.name)
                contex.state.stockArray[i] = arg;
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}