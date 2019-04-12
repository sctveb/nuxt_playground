<template>
    <div>
        <user-profile :info="userinfo">
            <div slot="username">{{userinfo.id}}</div>
            <span slot="time">{{"joined " + userinfo.created}},</span>
            <span slot="karma">{{userinfo.karma}}</span>
        </user-profile>
        <!-- <user-profile :info="userinfo"></user-profile> -->
        <!-- <p>id : {{userInfo.id}}</p>
        <p>karma : {{userInfo.karma}}</p>
        <p>created : {{userInfo.created}}</p>         -->
    </div>
</template>

<script>
import UserProfile from "../../../../components/UserProfile.vue"
export default {
    components: {
        UserProfile
    },    
    created() {
        const username = this.$route.params.id;
        console.log(username);
        this.$store.dispatch('FETCH_USER', username);
    },
    computed: {
        userinfo() {
            return this.$store.state.user;
        }
    }

}
</script>

<style>

</style>
