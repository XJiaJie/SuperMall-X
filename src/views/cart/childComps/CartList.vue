<template>
<div class="cart-list">
 <scroll class="conent" ref="scroll">
    <cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"></cart-list-item>
 </scroll>
</div>

</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'

  export default {
    name:'CartList',
    components:{
        Scroll,
        CartListItem,
    },
    computed:{
        ...mapGetters(['cartList'])
    },
    //活跃的页面
    activated(){
        this.$refs.scroll.refresh()
    }
  }
</script>
<style lang='' scoped>
.cart-list{
  overflow:hidden;
  position:absolute;
  top:44px;
  bottom:79px;
  left:0;
  right:0;
}
.conent{
    height:100%;
}
</style>