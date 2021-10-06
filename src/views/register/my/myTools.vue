<template>
  <div id="my_tools">
    <ul>
      <li v-for="(tool,index) in tools" :key="index">
        <img :src="tool.to_img" alt="">
        <p>{{tool.to_text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'MyTools',
  data () {
    return {
      tools:[
        {to_img:require('@/assets/img/home_nav/register/my_tools/01.png'),to_text:'我的预约'},
        {to_img:require('@/assets/img/home_nav/register/my_tools/02.png'),to_text:'高价回收'},
        {to_img:require('@/assets/img/home_nav/register/my_tools/03.png'),to_text:'京东火车票'},
        {to_img:require('@/assets/img/home_nav/register/my_tools/04.png'),to_text:'应用推荐'},
        {to_img:require('@/assets/img/home_nav/register/my_tools/05.png'),to_text:'京东机票'},
        {to_img:require('@/assets/img/home_nav/register/my_tools/06.png'),to_text:'京东酒店'},
        {to_img:require('@/assets/img/home_nav/register/my_tools/07.png'),to_text:'闲置换钱'},
      ]
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/base.css';

#my_tools{
  width: 100%;
  height: 130px;
  background-color: #fff;
  margin-top: 25px
}

ul{
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  list-style: none;
}

li img{
  width: 20px;
  margin: 20px 0px 0px 40px
}

li p{
  font-size: 12px;
  text-align: center;
}
</style>