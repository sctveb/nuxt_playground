<template>
    <div>
        <list-item></list-item>
        <!-- <div v-for="item in askItem">{{item.title}}</div> -->
        <!-- <a v-bind:href="item.url">{{item.url}}</a> -->
        <!-- <p v-for="item in askItem">
            <nuxt-link :to="`item/${item.id}`">{{item.title}}</nuxt-link>
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p> -->
    </div>
</template>

<script>
import bus from '../../utils/bus.js'
import ListItem from "../../components/ListItem.vue"
export default {
    components: {
        ListItem,
    },
    created(){
        bus.$emit('start:spinner');
        this.$store.dispatch('FETCH_ASKS')
        .then(()=>{
            console.log('fetched');
            bus.$emit('end:spinner');
        })
        .catch();
       
    }
}
</script>

<style>

</style>
