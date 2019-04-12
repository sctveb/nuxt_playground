<template>
    <div>
        <list-item></list-item>
        


        <!-- <ul class="news-list">
            <li v-for="job in jobs" class="post">

                <div class="points">
                    {{job.points || 0}}
                </div>

                <div>
                    <p class="news-title">
                        <a v-bind:href="job.url">
                            {{job.title}}
                        </a>
                    </p>
                    <small class="link-text">
                        {{job.time_ago}}
                        by
                        <a v-bind:href="job.url">{{job.domain}}</a>
                    </small>
                </div>
            </li>
        </ul> -->
        <!-- <div v-for="job in jobs">{{job.title}}</div> -->
        <!-- <p v-for="job in jobs"><a v-bind:href="`${job.url}`">{{job.title}}</a>
        <small>{{job.domain}}</small>
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
        this.$store.dispatch('FETCH_JOBS')
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
