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
import ListItem from "../../components/ListItem.vue"
// import {mapGetters} from 'vuex'
export default {
    components: {
        ListItem,
    }
//     computed: {
//         ...mapGetters({
//             askItem: 'fetchedAsk'
//         })
//     },    
//     created() {
//         this.$store.dispatch("FETCH_ASKS")
//     }
}
</script>

<style>

</style>
