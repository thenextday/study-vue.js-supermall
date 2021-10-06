<template>
  <div id="left_nav">
    <ul>
      <li v-for="(tit,index) in titles" :key="index">
        {{tit}}
      </li>
    </ul>
  </div>
</template>

<script>
  

export default {
  name:'LeftNav',
  data () {
    return {
      titles:[
        "热门推荐","手机数码","电脑办公","家用电器",
        "计生情趣","美妆护肤","个护清洁","汽车生活",
        "京东超市","男装","男鞋","女装"
      ]
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/base.css';

ul{
  list-style: none;
  width: 85px;
  background-color: rgb(245, 245, 245);
}

li{
  width: 85px;
  height: 46px;
  text-align: center;
  line-height: 46px;
}
</style>