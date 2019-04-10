<template>
<div>
    <tool-bar></tool-bar>
    <nuxt/>
    <Footer></Footer>    
</div>
</template>

<script>
import ToolBar from "../components/common/ToolBar.vue"
import Footer from "../components/common/Footer.vue"
export default {
    components: {
        ToolBar,
        Footer
    }

}
</script>

<style>

</style>
