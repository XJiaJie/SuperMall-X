<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
    <a :href="item.link">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
    </a>
    </div>
  </div>
</template>

<script>

  export default {
    name:'RecommendView',
    props:{
        recommends:Array,
        default(){
            return []
        }
    }
  }
</script>
<style lang='' scoped>
.recommend{
    display:flex;
    width:100%;
    text-align:center;
    font-size:12px;

    padding:10px 0 20px;
    border-bottom:10px solid #eee

}
.recommend-item{
    flex:1;
}
.recommend-item img{
    width:70px;
    height:70px;
    margin-bottom:8px;
}
</style>