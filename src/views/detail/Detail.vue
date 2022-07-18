<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
<scroll class="conent" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :paramInfo="paramInfo"/>
</scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail, Goods,Shop ,GoodsParam} from 'network/detail'

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
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
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
        })

    },
    methods:{
      //监听加载完成，进行高度上的刷新
       imageLoad(){
        this.$refs.scroll.refresh()
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
  bottom:20px;
  left:0;
  right:0;
}

.detail-nav{
  position:relative;
  z-index:10;
  background-color:#fff;
}
</style>