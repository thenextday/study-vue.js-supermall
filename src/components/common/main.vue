<template>
  <div>
    <Navigation>
      <NavigationItem path='/home'>
        <img slot="item_icon_active" 
        src="@/assets/img/home_nav/home_page/home_red.png" alt="">
        <img slot="item_icon" 
        src="@/assets/img/home_nav/home_page/home_gray.png" alt="">
      </NavigationItem>

      <NavigationItem path="/class">
        <img slot="item_icon_active" 
        src="@/assets/img/home_nav/classification/classification_red.png" alt="">
        <img slot="item_icon" 
        src="@/assets/img/home_nav/classification/classification_gray.png" alt="">
      </NavigationItem>

      <NavigationItem path="/cart">
        <img slot="item_icon_active" 
        src="@/assets/img/home_nav/cart/cart_red.png" alt="">
        <img slot="item_icon" 
        src="@/assets/img/home_nav/cart/cart_gray.png" alt="">
      </NavigationItem>

      <NavigationItem path='/register'>
        <img slot="item_icon_active" 
        src="../../assets/img/home_nav/register/resgister_red.png" alt="">
        <img slot="item_icon" 
        src="@/assets/img/home_nav/register/resgister_gray.png" alt="">
      </NavigationItem>
    </Navigation>
  </div>
</template>

<script>
  import Navigation from './Navigation'
  import NavigationItem from './NavigationItem'

  export default {
    name: 'Main',
    components:{
      Navigation,
      NavigationItem
    }
  }
</script>

<style scope>

</style>