<template>
  <div id="register">
    <TopNavBar class="tnb">
      <div slot="tl" class="tl">
        <img class="ret" src="@/assets/img/home_nav/register/tnb/return.png" alt />
      </div>

      <div slot="cl" class="cl">
        <h2 class="title">我的京东</h2>
      </div>

      <div slot="rl" class="cl">
        <img src="@/assets/img/home_nav/register/tnb/point.png" alt class="point" />
      </div>
    </TopNavBar>

    <div class="content">
      <myHeader></myHeader>

      <MySell></MySell>

      <MyGroup></MyGroup>

      <MyTools></MyTools>

      <div class="service">
        <p class="ser">客户服务</p>
        <img src="@/assets/img/home_nav/register/to.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "../../components/common/top_nav_bar/TopNavBar";
import myHeader from "./my/myHeader";
import MySell from "./my/MySell";
import MyGroup from "./my/myGroup";
import MyTools from "./my/myTools"

export default {
  name: "Register",
  components: {
    TopNavBar,
    myHeader,
    MySell,
    MyGroup,
    MyTools
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";

.ret {
  width: 10px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%)
}

.title {
  font-size: 16px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}

.point {
  position: absolute;
  right: 20px;
  top: 26px;
  top: 50%;
  transform: translateY(-50%);
}

.content {
  width: 100%;
  height: 556px;
  background: rgb(245, 245, 245);
  position: absolute;
  top: 49px;
  left: 0px;
}

.service{
  width: 100%;
  height: 45px;
  background-color: #fff;
  margin-top: 25px;
  position: relative;
}

.service img{
  width: 5px;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
}

.service p{
  font-size: 14px;
  line-height: 45px;
  margin-left: 20px
}
</style>