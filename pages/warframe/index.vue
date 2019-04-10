<template>
    
</template>

<script>
// https://forums.warframe.com/topic/1077490-riven-trading-toolbuilders-phase-1/
import axios from 'axios'
export default {
    created() {
        axios.get('http://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivensPC.json')
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    }

}
</script>

<style>

</style>
