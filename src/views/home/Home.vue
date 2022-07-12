<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

  <scroll class="conent" 
          ref="scroll" 
          :probeType="3" 
          @scroll="conentScroll"
          :pull-up-load="true"
          @pullingUp="loadMore">
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" 
                :titles="['流行','新款','精选']"
                @tabClick="tabClick"/>
    <goods-list :goods="showGoods" />
  </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>

</div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop.vue'

import {getHomeMultidata, getHomeGoods} from 'network/home'

// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'

  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    // 计算属性
    computed:{
      showGoods(){
         return this.goods[this.currentType].list
      }
    },
    data(){
     return{
       banners:[],
       recommends:[],
       goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]},
       },
       currentType:'pop',
       isShowBackTop:false
     }
    },
    created(){
      //请求多个数据
     this.getHomeMultidata()
      //请求商品数据
     this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
    },
    methods:{
      /**
       * 事件监听相关方法
      */
      tabClick(index){
        // console.log(index)
          switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
             this.currentType= 'new'
             break
          case 2:
             this.currentType = 'sell'
             break
        }
      },
      backClick(){
        // 拿到scroll中的ref=scroll，在调用scroll中的scrollTo方法 一二参数x,y ，第三个参数500ms
        this.$refs.scroll.scrollTo(0,0)
      },
      conentScroll(position){
        this.isShowBackTop=(-position.y)>1000
      },
      loadMore(){
        //监听图片加载完
        this.getHomeGoods(this.currentType)
        //重新刷新可滚动区的高度
        this.$refs.scroll.refresh()
      },
      /**
       * 网络请求相关的方法
      */ 
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends= res.data.recommend.list;
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          // console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1

          this.$refs.scroll.finishPullUp()
      })
      }
    }
  }
</script>
<style lang='' scoped>
#home{
  padding-top:44px;
  height:100vh; 
  position:relative;
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
.tab-control{
position:sticky;
top:44px;
}
.conent{
  overflow:hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  left:0;
  right:0.
}
/* .conent{
  height:calc(100% - 93px);
  overflow:hidden;
  margin-top:44px;
} */

</style>