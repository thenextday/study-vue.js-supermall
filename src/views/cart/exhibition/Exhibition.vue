<template>
  <div class="exhibition">
    <h6>你可能还需要</h6>

    <hr/>

    <ul>
      <li v-for="(ware ,index) in wares" :key="index">
        <img :src="ware.reco_img" alt />
        <p class="text">{{ware.reco_text}}</p>
        <p class="pri">￥ {{ware.reco_price}}</p>
        <input @click="addGoods(index)" class="btn" type="button" value="加入购物车">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Exhibition",
  data() {
    return {
      wares: [
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/001.jpg"),
          reco_text: "SKG 颈椎按摩器时尚颈椎按摩仪 肩颈按摩...",
          reco_price: 389,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/002.jpg"),
          reco_text: "雪柏（RAPOO） N1200S 有线鼠标 办公鼠标...",
          reco_price: 9.9,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/003.jpg"),
          reco_text: "SKG颈椎按摩器 颈部按摩仪劲锥脖子肩颈办...",
          reco_price: 569,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/004.jpg"),
          reco_text: "饰说 洗车拖把牛奶丝长柄软毛洗车刷子洗车套装工具...",
          reco_price: 39.9,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/005.jpg"),
          reco_text: "尚铭电器（SminG）按摩椅家用SL双曲导...",
          reco_price: 5780,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/006.jpg"),
          reco_text: "霸王（BAWANG） 育发防脱洗发水生姜汁洗发液防掉...",
          reco_price: 99,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/007.jpg"),
          reco_text: "SKG 颈椎按摩器 颈部按摩仪肩颈按摩器办公...",
          reco_price: 599,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/008.jpg"),
          reco_text: "尚铭电器（SminG）按摩椅家用智能SL双...",
          reco_price: 13960,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/009.jpg"),
          reco_text: "嫣沫2020新款男短袖T恤纯棉polo衫韩版潮流带领上衣潮...",
          reco_price: 109.6,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/010.jpg"),
          reco_text: "英菲克（INPHIC）PW1h 有线鼠标 游戏鼠标...",
          reco_price: 23.8,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/011.jpg"),
          reco_text: "施巴(sebamed)全国七仓配送 控油洗发露40...",
          reco_price: 22.9,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/012.jpg"),
          reco_text: "戴尔（DELL）MS116有线鼠标 商务办公鼠标（...",
          reco_price: 333,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/013.jpg"),
          reco_text: "仙视（Goodview）智能视频办公会议平板65英寸...",
          reco_price: 13999,
          counter: 1
        },
        {
          reco_img: require("@/assets/img/home_nav/home_page/recommend/re_show/014.jpg"),
          reco_text:
            "TP-LINK TL-WDR5620 AC1200 5G双频智能无线路由器 四天线智能...",
          reco_price: 109,
          counter: 1
        }
      ]
    };
  },
  methods:{
    addGoods (index) {
      var t = 0;
      var s = 0
      for (let i = 0;i < this.$store.state.cart.length;i++) {

        if (this.wares[index].reco_text === this.$store.state.cart[i].reco_text) {
          t++;
          s = i;
        }
      }
      console.log(t)
      if (t > 0) {
        this.$store.state.cart[s].counter++
      }

      else {
        this.$store.commit("addObj", this.wares[index]);
      }
    }
  }
};
</script>

<style scoped>
@import "../../../assets/css/base.css";

ul {
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 20px;
}

h6{
  text-align: center;
  margin-top: 20px;
  font-weight: 200;
}

h6,hr{
  color: rgb(150,150,150)
}

hr{
  margin-top: 5px;
}

li{
  margin: 5px 0px 0px 2px;
  
  position: relative;
}

li img{
  width: 157px;
}

li .text{
  font-size: 12px;
  width: 157px;
  margin-bottom:5px; 
}

li .pri {
  color: red;
  font-weight: bold;
}

li .btn{
  position: absolute;
  bottom: 0px;
  right: 20px;
}
</style>