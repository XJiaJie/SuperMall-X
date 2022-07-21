<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>

  export default {
    name:'Toast',
    // props:{
    //     type:String,
    //     default:''
    // },
    // show:{
    //     type:Boolean,
    //     default:false,
    // },
    data(){
        return{
            message:'',
            isShow:false,
        }
    },
    methods:{
        show(message='默认文字',duration=2000){
            this.isShow = true;
            this.message=message
            setTimeout(()=>{
                this.isShow = false;
                this.message=''
            },duration)
        }
    }
  }
</script>
<style lang='' scoped>
.toast{
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    padding:8px 10px;
    color:#fff;
    z-index:999;
    background-color:rgba(0,0,0,.75);
    border-radius:5px;
}
</style>