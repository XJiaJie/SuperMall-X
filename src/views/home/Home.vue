<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name:'Home',
    components:{
      NavBar,
    }
  }
</script>
<style lang='' scoped>
.home-nav{
  background-color:var(--color-tint);
  color:white;
}
</style>