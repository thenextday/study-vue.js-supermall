<template>
  <div id="my_sell">
    <ul>
      <li v-for="(sell,index) in sells" :key="index">
        <img :src="sell.sell_img" alt="">
        <p>{{sell.intro}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'MySell',
  data () {
    return {
      sells:[
        {sell_img:require('@/assets/img/home_nav/register/my_sell/01.png'),intro:'待付款'},
        {sell_img:require('@/assets/img/home_nav/register/my_sell/02.png'),intro:'待收货'},
        {sell_img:require('@/assets/img/home_nav/register/my_sell/03.png'),intro:'退换/售后'},
        {sell_img:require('@/assets/img/home_nav/register/my_sell/04.png'),intro:'全部订单'},
      ]
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/base.css';

#my_sell{
  width: 100%;
  height: 72px;
  background-color: #fff;
  margin: 25px 0px;
}

ul{
  display: flex;
  list-style: none;
}

li{
  flex: 1
}

li img {
  width: 25px;
  margin: 16px 0px 0px 36px;
}

li p {
  font-size: 12px;
  text-align: center;
}
</style>