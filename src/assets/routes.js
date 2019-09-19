
const Home = resolve => {
    require.ensure(['../components/Home.vue'] ,()=> {
        resolve(require('../components/Home.vue'))
    })
}

const Portfolio = resolve => {
    require.ensure(['../components/Portfolio.vue'] ,()=> {
        resolve(require('../components/Portfolio.vue'))
    })
}

const Stocks = resolve => {
    require.ensure(['../components/Stocks.vue'] ,()=> {
        resolve(require('../components/Stocks.vue'))
    })
}



export const routes = [
    {path: '', components: { default: Home } },
    {path: '/Portfolio' ,components: {default: Portfolio} },
    {path: '/Stocks' ,components: {default: Stocks} },

]