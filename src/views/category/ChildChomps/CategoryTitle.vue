<template>
  <div class="category-title">
     <div class="single-title" v-for="item in title">{{item}}</div>
  </div>
</template>

<script>

  export default {
    name:'CategoryTitle',
    data(){
        return{
      
        }
    },
    props:{
        title:[]
    }
  }
</script>
<style lang='' scoped>
.category-title{ 
    height:100vh;
    width:100px;
    background-color:pink

}
.single-title{ 
    margin: 0 20px 15px 15px;
    text-align:center;
    background-color:#eee

}
</style>