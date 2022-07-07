<template>
  <div>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/feature1.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/feature5.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item> 
    <tab-bar-item path="/category" activeColor="deepPink">
       <img slot="item-icon" src="~assets/img/tabbar/feature2.png" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/feature5.png" alt="">
       <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deepPink">
       <img slot="item-icon" src="~assets/img/tabbar/feature3.png" alt="">
       <img slot="item-icon-active" src="~assets/img/tabbar/feature5.png" alt="">
       <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/feature4.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/feature5.png" alt="">
       <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabber/TabBar'
import TabBarItem from 'components/common/tabber/TabBarItem.vue'
  export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem,
    }
  }
</script>
<style lang='' scoped>

</style>