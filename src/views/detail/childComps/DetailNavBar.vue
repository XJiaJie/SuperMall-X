<template>
  <div>
    <nav-bar>
        <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.png" alt="">
        </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" 
                 class="title-item" 
                 :class="{active:index===currentIndex}"
                 @click="titleClick(index)">
                 {{item}}
            </div>
        </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name:'DetailNavBar',
    components:{
        NavBar
    },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
        currentIndex:0,
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex=index;
            this.$emit('titleClick',index);
        },
        //监听点击后返回到home页面
        backClick(){
            this.$router.back()
            // this.$router.push('/home')
        }
    }
  }

</script>
<style lang='' scoped>
.title{
    display:flex;
    font-size:16px
}
.title-item{
    flex:1
}
.active{
    color:var(--color-high-text)
}
.back img{
    margin-top:2px;
    width:40px;
    height:40px;
    border-radius:50%;
}
</style>