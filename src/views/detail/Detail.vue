<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'

import { getDetail, Goods,Shop } from 'network/detail'

  export default {
    name:'Detail',
    data(){
        return {
            iid:null,
            topImages:[],
            // title:[],
            goods:{},
            shop:{}
        }
    },
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo
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
        //获取商品信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //创建店铺信息
        this.shop=new Shop(data.shopInfo)
        })

    },
    // methods:{
    // 
    // }
    }
</script>
<style lang='' scoped>

</style>