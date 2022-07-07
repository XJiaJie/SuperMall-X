<template>
<div class="tab-bar-item"  @click="itemBtn" >
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
     <!-- <slot name="item-icon"></slot>
     <slot name="item-text"></slot> -->
</div>

</template>
<script>

  export default {
    name:'TabBarItem',
    props:{
          path:String,
          activeColor:{
            type:String,
            default:'red'
          }
    },
    data(){
      return{
        // isActive:false,
      }
    },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isActive ? {color:this.activeColor}:{}
        }
      },
    methods:{
      itemBtn(){
        //在跳转之前判断一下跳转路径中是否包括本次路径
        if(!this.$route.path.includes(this.path)){
            this.$router.replace(this.path)
        }

      },
      // itemClick(){
      //   this.isActive=!this.isActive
      // }
    }
  }
</script>
<style lang='' scoped>
.tab-bar-item{
  flex: 1; /* flex 布局 等分布局*/
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
    width:20px;
    height:20px;
    margin-top:3px;
    vertical-align:middle;    
}
</style>