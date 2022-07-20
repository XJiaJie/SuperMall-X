<template>
<div class="cart">
  <!-- 导航 -->
<nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
<!-- 商品列表 -->
<cart-list></cart-list>
<!-- 底部汇总 -->
<cart-bottom-bar/>
</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

import { mapGetters } from 'vuex'


  export default {
    name:'Cart',
    components:{
      Scroll,
      NavBar,
      CartList,
      CartBottomBar,
    },
    computed:{
      //两种语法
      ...mapGetters(['cartLength'])
      }
    }
</script>
<style lang='' scoped>
.nav-bar{
  background-color:var(--color-tint);
  color:#fff;
}

</style>