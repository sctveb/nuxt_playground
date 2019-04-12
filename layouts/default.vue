<template>
<div>
    <tool-bar></tool-bar>
    <spinner :loading="loadingStatus"></spinner>
    <nuxt/>
    <Footer></Footer>    
</div>
</template>

<script>
import ToolBar from "../components/common/ToolBar.vue"
import Spinner from "../components/common/Spinner.vue"
import Footer from "../components/common/Footer.vue"
import bus from '../utils/bus.js'
export default {
    components: {
        ToolBar,
        Footer,
        Spinner
    },
    data(){
        return {
            loadingStatus: false,
        };
    },
    methods: {
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false;
        }
    },
    created(){
        bus.$on('start:spinner', this.startSpinner)
        bus.$on('end:spinner',this.endSpinner)
    },
    beforeDestory(){
        bus.$off('start:spinner', this.startSpinner)
        bus.$off('end:spinner',this.endSpinner)
    }

}
</script>

<style>

</style>
