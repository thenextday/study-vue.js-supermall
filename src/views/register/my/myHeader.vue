<template>
  <div class="my_header">
    <img src="../../../assets/img/home_nav/register/my.png" alt="">
    <p class="id">jd_k29swoe2oiu7wo</p>
    <p class="name">用户名：jd_k29swoe2oiu7wo</p>

  </div>
</template>

<script>
export default {
  name:'myHeader',
}
</script>

<style scoped>
  @import '../../../assets/css/base.css';

  .my_header{
    width: 100%;
    height: 134px;
    background-color: rgb(239,69,65);
    border-radius: 0px 0px 15px 15px;
    position: relative;
  }

  .my_header img{
    width: 60px;
    height: 60px;
    position: absolute;
    top: 21px;
    left: 21px;
  }

  .id,.name{
    color: #fff;
  }

  .id{
    font-size: 14px;
    position: absolute;
    top: 27px;
    left: 100px;
  }

  .name{
    font-size: 12px;
    position: absolute;
    top: 50px;
    left: 100px;
  }
</style>