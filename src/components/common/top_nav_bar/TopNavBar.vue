<template>
  <div class="top_nav_bar">
    <div class="left">
      <slot name="tl"></slot>
    </div>

    <div class="center">
      <slot name="cl"></slot>
    </div>

    <div class="right">
      <slot name="rl"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavBar"
};
</script>

<style scoped>
  @import "../../../assets/css/base.css";

  .top_nav_bar{
    display: flex;
    /* background-color: rgba(0, 0, 0, 0); */
    height: 44px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 200;
  }

  
</style>