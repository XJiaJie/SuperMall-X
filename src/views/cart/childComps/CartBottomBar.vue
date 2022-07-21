<template>
  <div class="bottom-bar">
    <div class="check-button">
        <check-button class="button" :is-checked="isSelectAll"/>
        <span>全选</span>
    </div>
    <div class="total-price">
        合计:{{totalPrice}}
    </div>
    <div class="calculate">
        去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
  export default {
    name:'CartBottomBar',
    components:{
        CheckButton
    },
    computed:{
        totalPrice(){
         return '￥'+ this.$store.state.cartList.filter(item=>{
            return item.checked
         }).reduce((preValue,item)=>{
            return preValue + item.price*item.count
         },0).toFixed(2)   
        },
        checkLength(){
            return this.$store.state.cartList.filter(item=>item.checked).length
        },
        isSelectAll(){
            if(this.$store.state.cartList.length===0) return false
            //filter方法
            //return !(this.$store.state.cartList.filter(item=> !item.checked).length)
            //find方法
            //return !this.$store.state.cartList.find(item=>!item.checked)
           //普通遍历方法
           for(let item of this.$store.state.cartList){
            if(!item.checked){
                return false
            }
           }
           return true 
        }
    }
  }
</script>
<style lang='' scoped>
.bottom-bar{
    height:44px;
    width:100%;
    background-color:#fff;
    position:absolute;
    bottom:44px;
    display:flex;
}
.check-button{
    display:flex;
    font-size:18px;
    font-weight:550;
    line-height:40px;
    width:100px
}
.check-button span{
    margin-left:20px;
}
.button{
    margin-top:10px;
    margin-left:5px;
    width:20px;
    height:20px;
}.total-price{
    line-height:40px;
    margin-left:20px;
    flex:1;
}
.calculate{
    line-height:40px;
    width:100PX;
    background-color:pink;
    text-align:center;
    color:#fff
}
</style>