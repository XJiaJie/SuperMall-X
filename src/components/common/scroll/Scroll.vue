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
    props:{
      probeType:{
        type:Number,
        default:0,
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
      //创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
        // 监听滚动的位置 0，1是不侦测，2侦测， 3只要滚动都侦测
        //监听div时必须要加上click为true,而button按钮可以不需要，都能监听。
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
        })
        //监听滚动的位置
  this.scroll.on('scroll',(position)=>{
    // console.log(position);
    this.$emit('scroll',position)
  })
      //3.监听上拉加载更多
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
      }
    }
  }
</script>
<style lang='' scoped>

</style>