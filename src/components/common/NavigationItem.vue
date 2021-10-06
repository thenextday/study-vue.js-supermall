<template>
  <div id="home_nav_item" @click="itemClick">
    <div v-if="isActive" class="active_img">
      <slot name="item_icon_active"></slot>
    </div>

    <div v-else>
      <slot name="item_icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation_Item",
  props:{
    path:String,
  },
  methods:{
    itemClick () {
      this.$router.push(this.path)
    },
  },
  computed:{
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
};
</script>

<style scope>
#home_nav_item {
  flex: 1;
  text-align: center;
}

#home_nav_item img{
  width: 66px;
}
</style>