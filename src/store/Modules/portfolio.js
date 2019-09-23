
const state = {
    mystockArray: [],
    funds: 0,
    myPortfolio: null,
    key: null,
    show: true

}

const getters = {
    mystockArray: state => {
        return state.mystockArray;
    },
    funds: state => {
        return state.funds;
    },
    myPortfolio: state => {
        return state.myPortfolio;
    },
    show: state=>{
        return state.show;
    }
}

const mutations = {

}

const actions = {
    setShow: (contex,arg) => {
        contex.state.show = arg;
    },
    addItem: (contex, arg) => {
        if(contex.state.funds - (arg.price * arg.stock) < 0)
        {
            return false;
        }
        contex.state.funds = contex.state.funds - (arg.price * arg.stock);
        contex.dispatch('updateMyStock',arg)
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
        return true;
            
    },
    sellItem: (contex,arg) => {
        contex.state.funds += arg.price * arg.stock;
        contex.state.mystockArray = contex.state.mystockArray.filter(element => {
            return !(element.name === arg.name)
        })
    },
    getUserFromDB: (contex,user) => {
        Vue.http.get('Users.json')
        .then(Response => {
            console.log(Response);
            return Response.json();
        })
        .then(res => {
            for(let key in res)
            {
                if(res[key].email === user.email && user.password === res[key].password)
                {
                    contex.state.myPortfolio = res[key];
                    contex.state.key = key;
                    contex.state.funds = contex.state.myPortfolio.portfolio.funds;
                    contex.dispatch('setShow',false);
                }
            }
        })
    },
    saveDataToDB: contex => {
        if(contex.state.myPortfolio === null)
            return;
    },
    logOut: contex => {
        contex.state.key = null;
        contex.state.mystockArray = [];
        contex.state.funds = 0;
        contex.state.myPortfolio =  null;
        contex.state.show = true
    }
    
}

export default {
    state,
    getters,
    mutations,
    actions
}