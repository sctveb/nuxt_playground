<template>
    <div>
        <div v-for="item in askItem">{{item.title}}</div>
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
