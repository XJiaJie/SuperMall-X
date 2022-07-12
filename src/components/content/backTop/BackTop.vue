<template>
  <div class="back-top" >
    <img src="~assets/img/common/top1.png" alt="">
  </div>
</template>

<script>

  export default {
    name:'BackTop',
  }
</script>
<style lang='' scoped>
.back-top {
  position:fixed;
  right:6px;
  bottom:50px;
  z-index:10;
}
.back-top img{
  width:40px;
  height:40px;
  border-radius:50%;
}
</style>