<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
    <a :href="item.link">
    <!-- 动态绑定 属性加冒号 -->
    <img :src="item.image" alt="" @load="imageLoad">
    </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper,SwiperItem } from 'components/common/swiper'
  export default {
    name:'HomeSwiper',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
      return{
        isLoad:false
      }
    },
    methods:{
      imageLoad(){
        if(!this.isLoad)
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    },
    components:{
        Swiper,
        SwiperItem,
    }
  }
</script>
<style lang='' scoped>

</style>