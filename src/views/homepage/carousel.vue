<template>
  <div id="carousel">
    <ul class="carousel_show">
      <li v-for="(img,index) in imgArray" v-show="currentIndex===index"  :key="index">
        <img class="img_show" :src="img" alt="">
      </li>
    </ul>

    <div class="tips">
      <span v-for="(item,index) in imgArray" :key="index" :class="{'auto':currentIndex===index}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data () {
    return {
      currentIndex:0,
      imgArray:[
        require('@/assets/img/home_nav/home_page/carousel/01.png'),
        require('@/assets/img/home_nav/home_page/carousel/02.png'),
        require('@/assets/img/home_nav/home_page/carousel/03.png'),
        require('@/assets/img/home_nav/home_page/carousel/04.png'),
        require('@/assets/img/home_nav/home_page/carousel/05.png'),
        require('@/assets/img/home_nav/home_page/carousel/06.png'),
        require('@/assets/img/home_nav/home_page/carousel/07.png')
      ]
    }
  },
  methods:{
    autoPlay () {
        this.currentIndex++;
        if(this.currentIndex===7) {
          this.currentIndex = 0
        }
      },

    showPlay () {
      
      setInterval(this.autoPlay,2000)
    }
  },
  created () {
    this.showPlay()
  }
};
</script>

<style scoped>
  @import "../../assets/css/base.css";
  #carousel{
    width: 100%;
    /* height: 200px; */
    position: relative;
  }

  li{
    width: 100%;
    list-style: none;
  }

  .img_show{
    width: 100%;
  }

  .tips{
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    z-index: 20;
  }

  .tips span{
    width: 10px;
    height: 2px;
    border-radius: 30;
    border: 0.5px solid gray;
    display:inline-block;
    margin: 0px 5px
  }

  .auto{
    background-color: rgba(255, 255, 255, 0.8)
  }
</style>