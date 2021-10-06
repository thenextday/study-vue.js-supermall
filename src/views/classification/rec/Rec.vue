<template>
  <div id="rec">
    <ul>
      <li v-for="(commod,index) in commodities" :key="index">
        <img :src="commod.com_img" alt="">
        <p>{{commod.explain}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Rec',
  data () {
    return {
      commodities:[
        {com_img:require('@/assets/img/home_nav/classification/rec/bing_xiang.jpg'),explain:'冰箱'},
        {com_img:require('@/assets/img/home_nav/classification/rec/bjp.jpg'),explain:"保健品"},
        {com_img:require('@/assets/img/home_nav/classification/rec/chong_dian_bao.jpg'),explain:"充电宝"},
        {com_img:require('@/assets/img/home_nav/classification/rec/chu_ju_ye.jpg'),explain:"除菌液"},
        {com_img:require('@/assets/img/home_nav/classification/rec/dcl.jpg'),explain:"电磁炉"},
        {com_img:require('@/assets/img/home_nav/classification/rec/dian_nao.png'),explain:"电脑"},
        {com_img:require('@/assets/img/home_nav/classification/rec/dsh.jpg'),explain:"电水壶"},
        {com_img:require('@/assets/img/home_nav/classification/rec/kong_tiao.jpg'),explain:"空调"},
        {com_img:require('@/assets/img/home_nav/classification/rec/kou_zhao.jpg'),explain:"口罩"},
        {com_img:require('@/assets/img/home_nav/classification/rec/ling_shi.jpg'),explain:"零食"},
        {com_img:require('@/assets/img/home_nav/classification/rec/mei_zhuang.jpg'),explain:"美妆"},
        {com_img:require('@/assets/img/home_nav/classification/rec/qp_sj.jpg'),explain:"全屏手机"},
        {com_img:require('@/assets/img/home_nav/classification/rec/qu_wen.jpg'),explain:"驱蚊用品"},
        {com_img:require('@/assets/img/home_nav/classification/rec/bjp.jpg'),explain:"手机"},
        {com_img:require('@/assets/img/home_nav/classification/rec/sjx.jpg'),explain:"数据线"},
        {com_img:require('@/assets/img/home_nav/classification/rec/ti_wen_ji.jpg'),explain:"体温计"},
        {com_img:require('@/assets/img/home_nav/classification/rec/tu_shu.jpg'),explain:"图书"}
      ]
    }
  }
}
</script>

<style scoped>
  @import '../../../assets/css/base.css';

  #rec{
    width: 280px;
    height: 510px;
    position: absolute;
    top: 95px;
    left: 90px;
    overflow: hidden;
    overflow-y: scroll;
  }

  ul{
    width: 100%;
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    list-style: none;
  }

  li img{
    width: 70px;
    margin-left: 12px;
  }

  li p{
    text-align: center;
    margin-bottom: 15px;
    font-size: 12px
  }
</style>