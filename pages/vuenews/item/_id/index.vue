<template>
    <div>
        <section>
        <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <nuxt-link :to="`/vuenews/user/${fetchedItem.user}`">
                    {{fetchedItem.user}}
                </nuxt-link>
                <div class="time">
                    {{fetchedItem.time_ago}}
                </div>
            </div>
        </div>
        <div>
            <h2>{{fetchedItem.title}}</h2>
        </div>
    </section>
    <section>
        <div v-html="fetchedItem.content">
            <!-- {{fetchedItem.content}} -->
        </div>
    </section>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['fetchedItem'])
    },
    created(){
        const item_id = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM',item_id)
    }

}
</script>

<style>
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
