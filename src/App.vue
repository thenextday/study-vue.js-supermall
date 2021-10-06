<template>
  <div id="app">
    <router-view/> 
    <Main></Main>
    
  </div>
</template>

<script>
import Main from './components/common/main'

export default {
  name: 'App',
  components:{
    Main,
  }
}
</script>

<style scoped>
  @import "./assets/css/base.css";
</style>
