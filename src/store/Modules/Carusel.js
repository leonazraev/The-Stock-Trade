
const state = {
    slidesList: []
}
const getters = {
    slideList: state => {
        return state.slidesList;
    }
}
const mutations = {

}
const actions = {
    LoadDB: contex => {
        Vue.http.get('CaruselDB.json')
        .then(response => {
            return response.data;
        })
        .then(res =>{
            let array = [];
            for(let key in res)
            {
                array.push(res[key]);
            }
            array = array.filter(e => {
                return e !== null;
            })
            contex.state.slidesList = array;

        })

    }

}

export default{
    state,
    getters,
    mutations,
    actions
}