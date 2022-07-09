<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature-view></feature-view>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
        <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
        <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
        <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
        <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView'

import {getHomeMultidata} from 'network/home'

// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
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
#home{
  padding-top:44px;
}
.home-nav{
  background-color:var(--color-tint);
  color:#fff;
  position:fixed;
  left:0;
  right:0;
  top:0;
  z-index:9;

}
</style>