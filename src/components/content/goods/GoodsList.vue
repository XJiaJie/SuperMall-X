<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"/>
   <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

  export default {
    name:'GoodsList',
    components:{
      GoodsListItem  
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
  }
</script>
<style lang='' scoped>
.goods{
    display:flex;
    flex-wrap:wrap; /* 包裹*/ 
    justify-content:space-around;
}

</style>