<template>
  <div id="classification">
    <TopNavBar class="tvb">
      <div class="tl" slot="tl">
        <img src="../../assets/img/home_nav/classification/return.png" alt="">
      </div>
      <div class="cl" slot="cl">
        <div class="package">
          <img src="../../assets/img/home_nav/classification/serach.png" alt="">
          <input type="text" placeholder="水果礼盒">
        </div>
      </div>
      <div class="rl" slot="rl">

      </div>
    </TopNavBar>

    <div class="context">
      <LeftNav></LeftNav>
    </div>

    <h2 class="heading">热门分类</h2>

    <Rec></Rec>
  </div>
</template>

<script>
import TopNavBar from '@/components/common/top_nav_bar/TopNavBar';
import LeftNav from './leftNav/LeftNav';
import Rec from './rec/Rec'

  export default {
    name:'Classification',
    components:{
      TopNavBar,
      LeftNav,
      Rec
    }
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";

  .tvb{
    border-bottom: 1px solid rgb(150, 150, 150)
  }

  .tl img{
    width: 10px;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%)
  }

  .package{
    width: 200px;
    height: 30px;
    background-color: rgb(247,247,247);
    border-radius: 30px;
    position: absolute;
    left: 75px;
    top: 50%;
    transform: translateY(-50%)
  }

  .package img{
    width: 18px;
    position: absolute;
    top: 6px;
    left: 8px;
  }

  .package input{
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    border: none;
    position: absolute;
    top: 8px;
    left: 33px;
  }

  .context{
    width: 100%;
    height: 560px;
    position: absolute;
    top: 49px;
    left: 0px;
    overflow: hidden;
    overflow-y: scroll;
  }

  .heading{
    font-size: 14px;
    position: absolute;
    top: 62px;
    left: 95px;
  }
</style>
