<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
<scroll class="conent" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :paramInfo="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommeds"/>
</scroll>
<back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import {itemListenerMixin , backTopMixin} from 'common/mixin'
import { debounce } from 'common/utils'

import { getDetail, Goods,Shop ,GoodsParam, getRecommend} from 'network/detail'

  export default {
    name:'Detail',
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommeds:[],
            //第一个值是商品的位置0，第二个为参数部分的位置，依次下去。
            themeTopYs:[],
            getThemeTopY:null,
            currentIndex:0,
        }
    },
    mixins:[itemListenerMixin,backTopMixin],
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        Scroll,
    },
    created(){
        //保存传入iid
        this.iid=this.$route.params.iid

        //请求详情页的数据
        getDetail(this.iid).then(res=>{
            console.log(res);
        //获取顶图的topImages
        const data = res.result
        this.topImages=data.itemInfo.topImages
        // //获取title
        // this.title=data.itemInfo.title
        //获取商品信息，整合到一起
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //创建店铺信息
        this.shop=new Shop(data.shopInfo)

        //保存商品的详情数据
        this.detailInfo=data.detailInfo;

        //获取参数信息
        this.paramInfo=new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //取出评论信息
        if(data.rate.cRate !==0){
          this.commentInfo = data.rate.list[0]
        }
        //bug会出现图片没有加载完，offsetTop会不对
        // this.$nextTick(()=>{
        //   this.themeTopYs=[]
        //   this.themeTopYs.push(0);
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        //   this.themeTopYs.push(this.$refs.common.$el.offsetTop);
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // })
        })
        //请求推荐数据
        getRecommend().then(res=>{
          this.recommeds=res.data.list
        })

        //给getthemeTopY赋值(给赋值的进行防抖操作)
        this.getThemeTopY = debounce(()=>{
          this.themeTopYs=[]
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        },200)
    },
    mounted(){ 
    },
    destroyed(){
      this.$bus.$off('itemIamgeLoad',this.itemImgListener)
    },
    methods:{
      //监听加载完成，进行高度上的刷新
       imageLoad(){
        this.$refs.scroll.refresh()
        this.getThemeTopY()

       },
       titleClick(index){
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index],200)
       },
       contentScroll(position){
        //获取Y值
        const positionY=-position.y
        //positionY 和主题中的值进行对比
        let length = this.themeTopYs.length
        for(let i=0; i<length;i++){
          if(this.currentIndex !==i &&((i<length -1 && positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1]) 
          || (i===length-1 &&positionY>=this.themeTopYs[i]))){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex

          }
        }
        //是否显示回到顶部
        this.isShowBackTop=(-position.y)>1000
       },
       addToCart(){
        console.log('---');
         //获取购物车需要展示的信息
         const product={}
         product.image=this.topImages[0];
         product.title=this.goods.title;
         product.desc=this.goods.desc;
         product.price=this.goods.realPrice;
         product.iid=this.iid

         //将商品添加到购物车里
        //  this.$store.cartList.push(product) i修改必须通过mutation
        // mutations的调用：this.$store.commit('addCart',product)
        //ations的调用
        this.$store.dispatch('addCart',product)
       }
    }
    }
</script>
<style lang='' scoped>
#detail{
  position:relative;
  z-index:9;
  background-color:#fff;
  height:100vh;
}
.conent{
  overflow:hidden;
  position:absolute;
  top:44px;
  bottom:58px;
  left:0;
  right:0;
}

.detail-nav{
  position:relative;
  z-index:10;
  background-color:#fff;
}
</style>