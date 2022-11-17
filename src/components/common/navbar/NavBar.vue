<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

  export default {
    name:'NavBar',
  }


</script>
<style lang='' scoped>
  .nav-bar{
    display:flex;
    line-height:44px;
    height:44px;
    text-align:center;
    font-size:20px;
    box-shadow:0 2px 4px rgba(100,100,100, 0.1);

}
  .left, .right{
     width:80px;
}
  .center{
    flex:1;
  }
</style>