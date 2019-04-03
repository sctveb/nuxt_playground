
export const state = () => ({
    todoItems: [],
    // todoItems: storage.fetch(),            
});

export const mutations = {
    addOneItem(state, todoItem) {
        console.log(state.todoItems)
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj)    
    },
    removeOneItem(state,payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    test(state, payload){
        state.todoItems = payload.arr;
    },
    toggleOneItem(state,payload) {
        //   todoItem.completed = !todoItem.completed;
          state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;      
          localStorage.removeItem(payload.todoItem.item);     
          localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));   
        },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    },
  }

export const getters = {
    storedTodoItems(state) {
        return state.todoItems;
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