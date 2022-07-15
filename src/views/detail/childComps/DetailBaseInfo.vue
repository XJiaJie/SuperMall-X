<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
        <span class="n-price">{{goods.newPrice}}</span>
        <span class="o-price">{{goods.oldPrice}}</span>
        <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
     <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
 <div class="info-service">
        <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
          <img :src="goods.services[index-1].icon">
          <span>{{goods.services[index-1].name}}</span>
        </span>
    </div>
  </div>
</template>

<script>

  export default {
    name:'DetailBaseInfo',
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        },
        // title:null
    }
  }
</script>
<style lang='' scoped>
.base-info{
    margin-top:10px;
    padding: 0 0 20px 0;
    color:#999;
    border-bottom:5px solid #f2f5f8;
}
.info-title{
  font-size:14px;
  color:black;
}
.info-price{
margin-top:10px;
margin-left:10px;
}
.n-price{
  font-size:20px;
  color:var(--color-high-text);
}
.o-price{
  font-size:12px;
  text-decoration:line-through; 
}
.info-other{
  display:flex;
  text-align:center;
  padding:20px 12px;
  border-bottom:5px solid #f2f5f8;
  font-size:14px;
}
.info-other span{
  flex:1;
}
.info-service{
  margin-top:10px;
  display:flex;
  font-size:10px;
  text-align:center;
}
.info-service-item{
  flex:1
}
.info-service img{
  width:15px;
  height:15px;
  background-color:pink;
  border-radius:50%;
}
.discount{
  padding:4px;
  font-size:16px;
  background-color:pink;
  border-radius:10px;
}
</style>