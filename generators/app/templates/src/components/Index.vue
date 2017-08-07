<template>
	<div class="container">
		<m-banner></m-banner>
		<m-content></m-content>
	</div>
</template>

<script>
import '../assets/css/index.css'
import Banner from "./module/Banner.vue"

import Content from './module/Content.vue'

export default {
  name: 'index',
  components:{
	  "m-banner": Banner,
	  "m-content": Content
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
