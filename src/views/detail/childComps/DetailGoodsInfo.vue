<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
  <div class="info-desc clear-fix">
    <div class="start"></div>
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="end"></div>
  </div>
  <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
  <div class="info-list">
    <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
  </div>
  </div>
</template>

<script>

  export default {
    name:'DetailGoodsInfo',
    props:{
        detailInfo:{
            type:Object,
        }
    },
    data(){
        return{
            counter:0,
            imagesLength:0
        }
    },
    methods:{
        imgLoad(){
            //做判断 使得图片加载完再发送事件，进行一次回调,
            if(++this.counter===this.imagesLength){
                this.$emit("imageLoad")
            }
        }
    },
    //监听属性的变化
    watch:{
        detailInfo(){
            //获取图片个数
            this.imagesLength = this.detailInfo.detailImage[0].list.length
        }
    }
  }
</script>
<style lang='' scoped>
.goods-info{
    padding:20px 0;
    border-bottom:5px solid #f2f5f8
}
.info-list img{
    width:100%
}
.desc{
    font-size:14px;
    background-color:rgb(191, 232, 232,.5);
    border-radius:10px;
}
.info-key{
    margin:8px 8px;
    color:var(--color-tint);
    font-weight:bold
}
</style>