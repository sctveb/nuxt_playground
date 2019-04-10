import { fetchNewsList, fetchJobsList, fetchAsksList } from '../src/api/index.js'

export const state = () => ({
    todoItems: [],
    check: false,
    news: [],
    jobs: [],
    asks: []
    // todoItems: storage.fetch(),            
});

export const mutations = {
    // todolist
    addOneItem(state, todoItem) {
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state,payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    test(state){
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
        state.todoItems = arr;
    },
    clearAllItems(state){
        if(process.client){
        localStorage.clear();
        state.todoItems = [];
        }
    },
    // vuenews
    SET_NEWS(state, news){
        state.news = news;
    },
    SET_JOBS(state, jobs){
        state.jobs = jobs;
    },
    SET_ASKS(state, asks){
        state.asks = asks;
    }
  }

export const actions = {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(function(response){
            context.commit('SET_NEWS', response.data)
            // state.news = response.data;           
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_JOBS(context){
        fetchJobsList()
        .then(response => {
            context.commit('SET_JOBS', response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },
    FETCH_ASKS(context){
        fetchAsksList()
        .then(response => {
            context.commit('SET_ASKS', response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const getters = {
    fetchedAsk(state){
        return state.asks;
    }
}





// const storage = {
//     fetch() {
//         const arr = [];
//         if(process.client){
//         if(localStorage.length > 0) {
//             for(var i = 0; i < localStorage.length; i++){
//                 if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//                    storage.localStorage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }
//             }
//         }
//     }
//         return arr;
//     }
// }

// import localstorage from './localStorage.js'  
// import Vuex from 'vuex'  
// const createstore = () => {
//     return new Vuex.Store({
//         state: () => ({
            
//         }),
//         mutations: {
//             addOneItem(state, todoItem) {
//                 const obj = {completed: false, item: todoItem};
//                 localStorage.setItem(todoItem, JSON.stringify(obj));
//                 state.todoItems.push(obj);
//             },
//             removeOneItem(state,payload){
//                 localStorage.removeItem(payload.todoItem.item);
//                 state.todoItems.splice(payload.index, 1);
//             }
//         },
//         modules: {
//         'localStorage': localstorage    
//         }
//     })
// }
// export default createstore