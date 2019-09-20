export var stocks_db = {
    fetchData(){
        Vue.http.get('Stocks.json')
        .then(response => {
            console.log('here')
            return response.json();
        })
        .then(res => {
            const array =[];
            for(let key in res)
            {
                array.push(res[key]);
            }
            console.log(array)
            return array;
        })
    },
    
}