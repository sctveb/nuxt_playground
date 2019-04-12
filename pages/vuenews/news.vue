<template>
    <list-item></list-item>
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
        this.$store.dispatch('FETCH_NEWS')
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