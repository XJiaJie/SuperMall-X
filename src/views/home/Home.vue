<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView.vue'
import {getHomeMultidata} from 'network/home'

// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
    },
    data(){
     return{
       banners:[],
       recommends:[]
     }
    },
    created(){
      //请求多个数据
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;
        this.recommends= res.data.recommend.list;
      })
    }
  }
</script>
<style lang='' scoped>
.home-nav{
  background-color:var(--color-tint);
  color:white;
}
</style>