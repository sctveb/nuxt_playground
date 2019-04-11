<template>
    <div>
        <!-- <div v-for="item in askItem">{{item.title}}</div> -->
        <p v-for="item in askItem">
            <nuxt-link :to="`item/${item.id}`">{{item.title}}</nuxt-link>
            <!-- <a v-bind:href="item.url">{{item.url}}</a> -->
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            askItem: 'fetchedAsk'
        })
    },    
    created() {
        this.$store.dispatch("FETCH_ASKS")
    }
}
</script>

<style>

</style>
