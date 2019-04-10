<template>
    <div class="header">
        <nuxt-link to="/vuenews/news">News</nuxt-link> |
        <nuxt-link to="/vuenews/ask">Ask</nuxt-link> |
        <nuxt-link to="/vuenews/jobs">Jobs</nuxt-link> |
        <nuxt-link to="/todolist">할일목록</nuxt-link>        
        </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
    color:white;
    background:#42b883;
    display:flex;
    padding:8px;
}
.header .nuxt-link-exact-active{
    color:#00FF00;
}
</style>
