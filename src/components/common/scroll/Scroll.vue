<template>
<!-- ref/childen -->
  <div class="wrapper" ref="wrapper">
    <div class="conent">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name:'Scroll',
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
        // 监听滚动的位置 0，1是不侦测，2侦测， 3只要滚动都侦测
        click:true,
        })

    }
  }
</script>
<style lang='' scoped>

</style>