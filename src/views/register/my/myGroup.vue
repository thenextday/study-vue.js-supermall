<template>
  <div id="my_group">
    <ul>
      <li v-for="(cell,index) in cells" :key="index">
        <h4>{{cell.counter}}</h4>
        <p>{{cell.int}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'MyGroup',
  data () {
    return {
      cells:[
        {counter:1,int:'商品收藏'},
        {counter:1,int:'店铺收藏'},
        {counter:7,int:'我的足迹'},
      ]
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/base.css';

#my_group{
  width: 100%;
  height: 72px;
  background-color: #fff;
}

ul{
  display: flex;
  list-style: none;
}

li{
  flex: 1
}

h4,p{
  text-align: center;
}

h4{
  margin-top: 15px;
  font-weight: 400;
}

p{
  font-size: 12px;
}
</style>