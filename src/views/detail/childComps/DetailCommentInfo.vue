<template>
    <div v-if="Object.keys(commentInfo).length !==0" class="comment-info">
    <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
         更多<i class="arrow-right"></i>
        </div>
    </div>
    <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
            <span class="date">{{commentInfo.created | showDate}}</span>
            <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-imgs">
            <img :src="item" v-for="(item ,index) in commentInfo.images" :key="index" alt="">
        </div>
    </div>
</div>

</template>

<script>
import {formatDate} from 'common/utils'
  export default {
    name:'DetailCommentInfo',
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        showDate:function (value){
            //将时间戳转成Date对象
            let date = new Date(value*1000);
            //讲date 进行格式化
            return formatDate(date, 'yyyy-MM-dd hh:mm')
        }
    }
  }
</script>
<style lang='' scoped>
.comment-info{
    padding:5px 12px;
    color:#333;
    border-bottom:5px solid #f2f5f8
}
.info-header{
    height:50px;
    line-height:50px;
    border-bottom:1px solid rgba(0,0,0,.1);
    display:flex;

}
.header-more{
 margin-left:250px;
}
.info-user img{
    width:40px;
    height:40px;
}
.info-user span{
    margin-left:14px;
    font-size:20px;
    font-family:bold;
}
.info-other{
    margin:10px 0;
}
.info-imgs img{
    width:100px;
    height:100px;
    margin-right:5px;
}
.info-detail p{
    padding:5px ;
    border-bottom:5px solid #f2f5f8
}
</style>