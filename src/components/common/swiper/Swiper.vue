<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove"
    @touchend="touchEnd">
    <slot></slot>
    </div>
    <slot name="indicator">
    </slot>
    <div class="indicator">
        <slot name="indicator" v-if="showIndicator && slideCount>1">
          <div v-for="(item,index) in slideCount" class="indi-item" :class="{active:index === currentIndex-1}" :key="index"></div>
        </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Swiper',
    props:{
        interval:{
            type:Number,
            default:3000
        },
        animDuration:{
            type:Number,
            default:300
        },
        moveRatio:{
            type:Number,
            default:0.25
        },
        //指示器，轮播图下面得小圆点
        showIndicator:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            slideCount:0, //元素个数
            totalWidth:0, //swiper宽度
            swiperStyle:{}, //swiper样式
            currentIndex:1, //当前的index
            scrolling:false, //是否正在滑动
        }
    },
    mounted(){
        //操作DOM，在前后添加Silde
        setTimeout(() => {
           this.handleDom();
           
           //开启定时器
           this.startTimer()
        }, 100);
    },
    methods:{
     /**
      * 定时操作
      */
     startTimer(){
        this.playTimer = window.setInterval(()=>{
            this.currentIndex++;
            this.scrollContent(-this.currentIndex * this.totalWidth);
        },this.interval)
     },
     stopTimer(){
        window.clearInterval(this.playTimer);
     },
     /**
      * 滚动到正确的位置
      */
     scrollContent(currentPosition){
        //0.设置正在滚动
        this.scrolling=true;
        //1.设置开始滚动动画
        this.swiperStyle.transition = 'transform' + this.animDuration + 'ms';
        this.setTransform(currentPosition);

        //2.判断滚动到的位置
        this.checkPosition();

        //3.滚动完成
        this.scrolling=false;
     },
     /**
      * 校验正确的位置
      */
     checkPosition(){
        window.setTimeout(()=>{
            //校验正确的位置
            this.swiperStyle.transition = '0ms';
            if(this.currentIndex >= this.slideCount +1){
                this.currentIndex = 1;
                this.setTransform(-this.currentIndex * this.totalWidth);
            }else if (this.currentIndex <= 0){
                this.currentIndex = this.slideCount;
                this.setTransform(-this.currentIndex * this.totalWidth);
            }
            //结束移动后的回调
            this.$emit('transitionEnd', this.currentIndex - 1);
        },this.animDuration)
     },
     /**
      * 设置滚动的位置
      */
     setTransform(position){
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle[`-webkit-transform`] =  `translate3d(${position}px),0,0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0 , 0`;
     },
     /**
      * 操作DOM，在DOM前后添加slide
      */
     handleDom(){
        //获取要操作的元素
        let swiperE1 = document.querySelector('.swiper');
        let slidesE1s = swiperE1.getElementsByClassName('slide');
        //保存个数
        this.slideCount = slidesE1s.length;

        //如果大于1个，那么在前后分别添加一个slide
        if(this.slideCount > 1){
            let cloneFirst = slidesE1s[0].cloneNode(true);
            let cloneLast = slidesE1s[this.slideCount -1].cloneNode(true);
            swiperE1.insertBefore(cloneLast, slidesE1s[0]);
            swiperE1.appendChild(cloneFirst);
            this.totalWidth = swiperE1.offsetWidth;
            this.swiperStyle = swiperE1.style;
        }
    //让swiper元素，显示第一个（目前是显示前面添加的最后一个元素）
            this.setTransform(-this.totalWidth);
     },
     /**
      * 拖动事件的处理
      */
     touchStart(e){
        //如果正在滚动，不可以拖动
        if(this.scrolling) return;
        //停止定时器
        this.stopTimer();
        //保存开始滚动的位置
        this.startX = e.touches[0].pageX;

     },
     touchMove(e){
        //计算出用户拖动的距离
        this.currentX = e.touches[0].pageX;
        this.distance =this.currentX -this.startX;
        let currentPosition = -this.currentIndex * this.totalWidth;
        let moveDistance = this.distance * currentPosition;

        //设置当前的位置
        this.setTransform(moveDistance)
     },
     touchEnd(e){
        //获取移动的距离
        let currentMove = Math.abs(this.distance);
        //判断最终的距离
        if(this.distance === 0){
            return
        } else if (this.distance > 0 && currentMove > this.totalWidth*this.moveRatio) {
//右边移动超过0.5
this.currentIndex--
        }else if (this.distance < 0 && currentMove > this.totalWidth*this.moveRatio) {
//向左移动超过0.5
this.currentIndex++
        }
        //移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);

        //移动完成后重新开始定时器
        this.startTimer(); 
    },
    /**
     * 控制上一个，下一个
     */
    previous(){
        this.changeItem(-1);
    },
    next(){
        this.changeItem(1)
    },
    changeItem(num){
        //移除定时器
        this.stopTimer();
        //修改index和位置
        this.currentIndex += num;
        this.scrollContent(-this.currentIndex * this.totalWidth);
        //添加定时器
        this.startTimer();
      }
    }
  }
</script>
<style lang='' scoped>
#hy-swiper{
    overflow:hidden;
    position:relative;
}
.swiper{
    display:flex;
}
 .indicator{
    display:flex;
    justify-content:center;
    position:absolute;
    width:100%;
    bottom:8px;
 }
.indi-item{
    box-sizing:border-box;
    width:8px;
    height:8px;
    border-radius:4px;
    background-color:#fff;
    line-height:8px;
    text-align:center;
    font-size:12px;
    margin:0 5px;
}

.indi-item.active{
    background-color:rgba(212,62,46,1.0)
}
</style>