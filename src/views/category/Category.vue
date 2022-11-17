<template>
<div id="categroy">

<nav-bar class="nav"><div slot="center">分类</div></nav-bar>

<scroll class="conent" >
  <category-title :title="title"></category-title>
</scroll>
 
</div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll'
import CategoryTitle from './ChildChomps/CategoryTitle.vue';

import {getCategory, getSubcategory, getCategoryDetail} from "network/category";

  export default {
    name:'Category',
    components:{
      NavBar,
      Scroll,
      CategoryTitle
    },
    data(){
      return{
        categories:[],
        categoryData: {
        },
        title:[],
        cruentIndex: 0
      }
    },
    // 请求数据
      created(){
        getCategory().then(res=>{
          // console.log(res.data);
          this.categories = res.data.category.list;
          for(let i=0; i<this.categories.length;i++){
                this.title.push(this.categories[i].title);
                  
          }
          console.log(this.title)
        })

      },

    //组件创建完成后调用
    // mounted(){
    //    this.scroll=new BScroll(document.querySelector('.wrapper'),{
    //     // 监听滚动的位置 0，1是不侦测，2侦测， 3只要滚动都侦测
    //     probeType:2,
    //     pullUpLoad:true,
    //   })
    //   this.scroll.on('scroll', (position)=>{
    //     // console.log(position);
    //   })
    //   this.scroll.on('pullingUp',()=>{
    //     console.log('上拉加载更多');

    //   })
    // }
  }
</script>
<style lang='' scoped>
.conent{
  height:100vh;
  background-color:#eee;
  overflow:hidden;
  /* overflow-y:scroll; */
  margin-top:44px;
}
.nav{ 
    position:absolute;
    top:0;
    left:0;
    right:0;
}
</style>