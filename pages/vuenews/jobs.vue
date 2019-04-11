<template>
    <div>
        <!-- <div v-for="job in jobs">{{job.title}}</div> -->
        <p v-for="job in jobs"><a v-bind:href="`${job.url}`">{{job.title}}</a>
        <small>{{job.domain}}</small>
        </p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            jobs: state => state.jobs
        })
    },    
    created() {        
        this.$store.dispatch("FETCH_JOBS")
    }
}
</script>

<style>

</style>
