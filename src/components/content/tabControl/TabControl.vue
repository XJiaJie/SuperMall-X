<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" 
    :class="{active: index===currentIndex}"
    @click="itemClick(index)">
    <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0,
    }
  },
  methods:{
    itemClick(index){
    this.currentIndex=index;
    this.$emit('tabClick',index)
    }
  }
} 
</script>
<style lang='' scoped>
.tab-control{
    display:flex;
    text-align:center;
    font-size:15px;
    height:44px;
    line-height:44px;
    background-color:#fff;
    z-index:9;
}
.tab-control-item{
    flex:1;

}
.tab-control-item span{
    padding:5px;
}
.active span{
    border-bottom:4px solid var(--color-tint)
}
.active{
    color:var(--color-high-text);
}
</style>