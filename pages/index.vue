<template>
<!-- navbar -->
    <div>
        <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
        </div>
<!-- main -->
<!-- feature -->
<!-- 솔루션, 주요 특징, 시연, 추천사 등 -->
<!-- contect -->
<!-- footer -->
</template>

<script>
export default {
    data() {
        return {show: true}
    },
    transition: {
        name:'fade',        
    },

}
</script>

<style>

</style>
