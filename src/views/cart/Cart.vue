<template>
  <div id="cart">
    <TopNavBar class="tnb">
      <div class="tl" slot="tl">
        <img class="return" src="@/assets/img/home_nav/cart/return/return.png" alt />
      </div>

      <div class="cl" slot="cl">
        <h2 class="title">购物车</h2>
      </div>

      <div class="rl" slot="rl">
        <img class="point" src="@/assets/img/home_nav/cart/return/point.png" alt />
      </div>
    </TopNavBar>

    <div class="statue">
      <ul v-if="$store.state.cart.length > 0">
        <li class="outer" v-for="(car,index) in $store.state.cart" :key="index">
          <img :src="car.reco_img" alt />
          <p class="introduct">{{car.reco_text}}</p>
          <p class="price">￥ {{car.reco_price}}</p>
          <button class="remove" @click="rem(index)">删除</button>
          <button class="discrease" @click="reduce(index)">-</button>
          <p class="num">{{car.counter}}</p>
          <button class="increase" @click="augment(index)">+</button>
        </li>
      </ul>

      <div class="empty" v-else>
        <img src="@/assets/img/home_nav/cart/else/else.png" alt class="empty_img" />
        <p class="empty_text">购物车空空如也，去逛逛吧~</p>
      </div>

      <Exhibition></Exhibition>
    </div>

    <div class="set">
      <div class="pri">合计： ￥{{$store.getters.total}}</div>
      <div class="settlement">去结算</div>
    </div>
  </div>
</template>

<script>
import TopNavBar from "@/components/common/top_nav_bar/TopNavBar";
import Exhibition from "./exhibition/Exhibition";

export default {
  name: "Cart",
  components: {
    TopNavBar,
    Exhibition
  },
  methods: {
    reduce(index) {
      console.log(index);
      this.$store.state.cart[index].counter--;
      if (this.$store.state.cart[index].counter < 1) {
        this.$store.state.cart.splice(index, 1);
      }
    },
    augment(index) {
      console.log(index);

      this.$store.state.cart[index].counter++;
    },
    rem (index) {
      this.$store.state.cart.splice(index,1)
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/base.css";

.tnb {
  background-color: #fff;
  width: 100%;
}

.tl {
  position: absolute;
  top: 15px;
  left: 10px;
}

.cl {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.rl {
  position: absolute;
  top: 7px;
  right: 10px;
}

.return {
  width: 10px;
}

.point {
  width: 20px;
}

.statue{
  width: 100%;
  height: 510px;
  overflow: hidden;
  overflow-y:scroll;
  /* background-color: aqua; */
  position: absolute;
  top: 49px;
  left: 0px;
}

.title {
  text-align: center;
  font-weight: 500;
  font-size: 18px;
}

.outer {
  list-style: none;
  width: 100%;
  /* height: 700px; */
  background-color: #fff;
  position: relative;
  border: 1px solid rgb(100, 100, 100);
  margin-top: 5px;
  border-radius: 5px;
}

.outer img {
  width: 70px;
}

.outer .introduct {
  width: 280px;
  font-size: 15px;
  position: absolute;
  top: 0px;
  right: 0px;
}

.outer .price {
  color: red;
  position: absolute;
  top: 49px;
  left: 79px;
}

.outer .discrease,
.outer .increase{
  width: 20px;
}

.outer .discrease {
  position: absolute;
  top: 49px;
  right: 58px;
}

.outer .num {
  position: absolute;
  top: 49px;
  right: 39px;
}

.outer .increase {
  position: absolute;
  top: 49px;
  right: 10px;
}

.remove{
  position: absolute;
  bottom: 4px;
  right: 90px;
  width: 35px;
}

.set {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 55px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(246, 246, 246);
  z-index: 50;
}

.pri {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.settlement {
  width: 113px;
  height: 40px;
  background-color: red;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
  border-radius: 30px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.empty {
  width: 100%;
  height: 295px;
  background-color: rgb(246, 246, 246);
  position: relative;
}

.empty_img {
  width: 90px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.empty_text {
  width: 204px;
  position: absolute;
  top: 155px;
  left: 50%;
  transform: translateX(-50%);
}
</style>