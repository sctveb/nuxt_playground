
export const state = () => ({
    todoItems: [],
    // todoItems: storage.fetch(),            
});

export const mutations = {
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
                   storage.localStorage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    }
        state.todoItems = arr;
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