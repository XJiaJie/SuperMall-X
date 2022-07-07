<template>
<div id="tab-bar"> 
  <slot></slot>
</div>
</template>
<script>

  export default {
    name:'TabBar',
  }
</script>
<style lang='' scoped>
#tab-bar{
  display: flex;  /* flex 布局 等分布局*/
  background-color: rgb(234, 242, 240);
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -8px 6px rgba(100,100,100,0.2);
}

</style>