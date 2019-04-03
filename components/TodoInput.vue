<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">        
        <span class="addContainer" v-on:click="addTodo"><i class="fas fa-plus"></i></span>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    data() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodo() {
            console.log(this.newTodoItem);
            if(this.newTodoItem !== '') {
            const text = this.newTodoItem.trim();
            this.$store.commit('addOneItem', text);
            // this.$emit('addTodoItem', this.newTodoItem);            
            this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    },    
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
