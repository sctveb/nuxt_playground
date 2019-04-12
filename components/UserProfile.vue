<template>
    <div>
        <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <div>
                    username :
                    <slot name="username"></slot>
                    <!-- <template v-if="this.$route.name !== 'vuenews-item-id'">
                        {{info.id}}
                    </template>                    
                    <template v-else>
                    {{info.user}}
                    </template>                     -->
                </div>
                <div class="time">
                     <slot name="time"></slot>
                    <!-- <template v-if="this.$route.name !== 'vuenews-item-id'">
                        {{info.created}}
                    </template>                    
                    <template v-else>
                    {{info.time_ago}}
                    </template>                    -->                
                <slot name="karma"></slot>
                </div>
            </div>
        </div>
        <!-- {{userInfo.id}}
        {{userInfo.created}} -->
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    },    
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user;
    //     }
    // },
}
</script>

<style scoped>
.user-container {
    display:flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;    
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>
