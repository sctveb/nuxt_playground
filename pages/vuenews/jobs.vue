<template>
    <div>
        <div v-for="job in jobs">{{job.title}}</div>
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
