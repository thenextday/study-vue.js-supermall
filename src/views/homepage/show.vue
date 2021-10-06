<template>
  <div id="show">
    <ul>
      <li v-for="(showData,index) in showDatas" :key="index">
        <img :src="showData.showImage" alt="">
        <p>{{showData.showText}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      showDatas: [
        {showImage:require("@/assets/img/home_nav/home_page/show/01.png"),showText:'京东超市'}, 
        {showImage:require("@/assets/img/home_nav/home_page/show/02.png"),showText:'数码电器'}, 
        {showImage:require("@/assets/img/home_nav/home_page/show/03.png"),showText:'京东服饰'}, 
        {showImage:require("@/assets/img/home_nav/home_page/show/04.png"),showText:'京东生鲜'}, 
        {showImage:require("@/assets/img/home_nav/home_page/show/05.png"),showText:'京东到家'}, 
        {showImage:require("@/assets/img/home_nav/home_page/show/06.png"),showText:'充值缴费'}, 
        {showImage:require("@/assets/img/home_nav/home_page/show/07.png"),showText:'9.9元拼'}, 
        {showImage:require("@/assets/img/home_nav/home_page/show/08.png"),showText:'领券'}, 
        {showImage:require("@/assets/img/home_nav/home_page/show/09.png"),showText:'领金贴'}, 
        {showImage:require("@/assets/img/home_nav/home_page/show/10.png"),showText:'PLUS会员'}
      ]
    };
  }
};
</script>

<style scoped>
  @import "../../assets/css/base.css";

  ul{
    background-color:#fff;
    width: 365px;
    height: 140px;
    border-radius: 15px;
    list-style: square none;
  }

  ul li {
    list-style: none;
    width: 20%;
    height: 70px;
    display: inline-block
  }

  ul li img{
    width: 40px;
    height: 40px;
    margin: 3px 0px 0px 19px;
  }

  ul li p{
    font-size: 12px;
    text-align: center
  }

</style>