import { debounce } from 'common/utils'
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