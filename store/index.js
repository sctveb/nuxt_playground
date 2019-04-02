import Vuex from 'vuex'

const storage = {
    fetch() {
        const arr = [];
        if(process.client){
        if(localStorage.length > 0) {
            for(var i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    }
        return arr;
    }
}


const createstore = () => {
    return new Vuex.Store({
        state: () => ({
            todoItems: storage.fetch(),
        }),
        mutations: {}
    })
}
export default createstore