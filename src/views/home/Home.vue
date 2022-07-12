<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <tab-control :titles="['流行','新款','精选']"
                @tabClick="tabClick"
                ref="tabControl1"
                class="tab-control" v-show="isTabFixed"/>
  <scroll class="conent" 
          ref="scroll" 
          :probeType="3" 
          @scroll="conentScroll"
          :pull-up-load="true"
          @pullingUp="loadMore">
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']"
                @tabClick="tabClick"
                ref="tabControl2"/>
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
import { debounce } from 'common/utils'
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
       isShowBackTop:false,
       tabOffsetTop:0,
       isTabFixed:false
     }
    },
    //created作用组件创建完就开始监听
    created(){
      //methods中的getHomeMultidata方法，来请求多个数据
     this.getHomeMultidata()
      //methods中的getHomGoods方法，请求商品数据
     this.getHomeGoods('pop')
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
    },
    //组件加载完成
    mounted(){
      //监听item中的图片加载完成的事件监听
      const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('itemIamgeLoad',()=>{
        refresh()
      })
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
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backClick(){
        // 拿到scroll中的ref=scroll，在调用scroll中的scrollTo方法 一二参数x,y ，第三个参数500ms
        this.$refs.scroll.scrollTo(0,0)
      },
      conentScroll(position){
        //判断BackTop是否显示
        this.isShowBackTop=(-position.y)>1000

        //决定tabControl是否position：fixd
        this.isTabFixed = (-position.y)>this.tabOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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

          //完成上拉加载更多
          this.$refs.scroll.finishPullUp()
      })
      }
    }
  }
</script>
<style lang='' scoped>
#home{
  /* padding-top:44px; */
  height:100vh; 
  position:relative;
}
.home-nav{
  background-color:var(--color-tint);
  color:#fff;
  /* position:fixed;
  left:0;
  right:0;
  top:0;
  z-index:9; */
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
.tab-control{
position:relative;
z-index:10;
}
</style>