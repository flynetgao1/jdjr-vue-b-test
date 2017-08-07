<template>
  <div>
    <m-header></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
import Header from "./components/common/Header.vue"
import Footer from "./components/common/Footer.vue"
export default {
  name: 'app',
  components:{
    "m-header": Header,
    "m-footer": Footer
  }
}
</script>

<style>

</style>
