<template>
  <div id="home_nav">
    <slot></slot>
    
  </div>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scope>
  #home_nav{
    background-color: transparent;
    height: 56px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
    background-color: #ffffff
  }
</style>