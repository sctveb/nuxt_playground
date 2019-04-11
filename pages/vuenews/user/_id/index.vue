<template>
    <div>
        <p>id : {{userInfo.id}}</p>
        <p>karma : {{userInfo.karma}}</p>
        <p>created : {{userInfo.created}}</p>        
    </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user
        }
    },
    created() {
        const username = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', username);
    }

}
</script>

<style>

</style>
