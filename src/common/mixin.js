import { debounce } from 'common/utils'
import BackTop from 'components/content/backTop/BackTop.vue'

export const itemListenerMixin={
    data(){
        return {
            itemImgListener:null
        }
    },
    mounted(){
     //监听item中的图片加载完成的事件监听
      const refresh = debounce(this.$refs.scroll.refresh,50)
      //对监听事件进行保存
      this.itemImgListener=()=>{
        refresh()}
      this.$bus.$on('itemIamgeLoad',this.itemImgListener
      )
    }
}


export const backTopMixin ={
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop:false,
    }
  },
  methods:{
    backClick(){
      // 拿到scroll中的ref=scroll，在调用scroll中的scrollTo方法 一二参数x,y ，第三个参数500ms
      this.$refs.scroll.scrollTo(0,0)
    },
  }
}