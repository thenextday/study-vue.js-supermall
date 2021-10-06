<template>
  <div id="homepage">
    <div>
      <TopNavBar class="tvb">
        <div class="tl" slot="tl">
          <img src="../../assets/img/home_nav/home_page/top_nav_bar/category.png" alt />
        </div>

        <div class="cl" slot="cl">
          <div class="text">
            <i class="jd_icon"></i>
            <i class="tip"></i>
            <i class="serach"></i>
            <input class="sedo" placeholder="九阳榨汁机" type="text" />
          </div>
        </div>

        <div class="rl" slot="rl">
          <img src="../../assets/img/home_nav/home_page/top_nav_bar/user.png" alt />
        </div>
      </TopNavBar>

      <div class="homeMain">
        <div>
          <Carousel></Carousel>

          <Show></Show>

          <Recommend></Recommend>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "../../components/common/top_nav_bar/TopNavBar";
import Carousel from "./carousel";
import Show from "./show";
import Recommend from "./recommend";
import BScoller from "better-scroll";

export default {
  name: "HomePage",
  components: {
    TopNavBar,
    Carousel,
    Show,
    Recommend
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScoller(document.querySelector(".homeMain"), {
      probeType: 3,
      pullUpLoad: true
    });

    this.scroll.on("scroll", position => {});
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";
body {
  background-color: rgb(246, 246, 246);
}

.tvb {
  background-color: rgb(200, 37, 25);
}

.homeMain {
  width: 100%;
  height: 570px;
  overflow: hidden;
  position: absolute;
  top: 49px;
  left: 0px;
}



.cl{
  position: absolute;
  top: 1px;
  left: 58px;
  height: 16px;
}

.tl img{
  width: 20px;
  margin: 10px 0px 0px 10px
}

.text {
  width: 250px;
  position: relative;
  margin: 7px 0px 0px 1px;
  height: 23px;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 30px;
  text-align: center;
}

.jd_icon {
  width: 20px;
  height: 15px;
  background-color: aqua;
  position: absolute;
  top: 5px;
  left: 7px;
  background: url("../../assets/img/home_nav/home_page/top_nav_bar/jd_icon.png")
    0px 0px/20px;
}

.rl{
  position: absolute;
  top: 11px;
  right: 21px;
}

.rl img{
  width: 20px;
}

.tip {
  width: 2px;
  height: 15px;
  background-color: rgb(200, 200, 200);
  position: absolute;
  top: 5px;
  left: 32px;
}

.serach {
  width: 18px;
  height: 15px;
  background: url("../../assets/img/home_nav/home_page/top_nav_bar/serach.png")
    0px 0px/18px;
  position: absolute;
  top: 5px;
  left: 42px;
}

.sedo {
  position: absolute;
  left: 70px;
  top: 4px;
  border: none;
  outline: none;
}
</style>