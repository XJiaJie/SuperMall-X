<template>
  <div class="check-button" :class="{active:isChecked}" >
  <div class="null"></div>
   <!-- <span v-if="isShow"><img src="~assets/img/cart/billcheckg.png" alt=""></span> 
    <span v-else><img src="~assets/img/cart/billcheck.png" alt=""></span> -->
  </div>
</template>

<script>

  export default {
    name:'CheckButton',
    props:{
      isChecked:{
        type:Boolean,
        default:false,
      }
    },

  }
</script>
<style lang='' scoped>
.check-button{
 width:20px;
 height:20px;
}
.null{
  width:20px;
  height:20px;
  border:5px solid #eee
}
.active{
  background-color:red;
}
</style>