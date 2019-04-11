<template>
    <div>
        <!-- <div v-for="news in this.$store.state.news">{{news.title}}</div> -->
        <p v-for="item in this.$store.state.news">
            <a v-bind:href="item.url">
                {{item.title}}
                </a>
            <small>{{item.time_ago}} 
                <!-- <nuxt-link v-bind:to="{path:'`user/${item.user}`',params:{id:'${item.user}'}}">{{item.user}}</nuxt-link> -->
                <nuxt-link v-bind:to="`user/${item.user}`">{{item.user}}</nuxt-link>
                </small>
        </p>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>
