import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建store对象
const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCart(state,payload){
            //查找数组中是否有该商品
            let oldProduct =state.cartList.find(item=>item.iid===payload.iid)
           
            //payload新添加的商品
            //遍历的方法
            // let oldProduct = null
            // for(let item of state.cartList){
            //     if(item.iid=== payload.iid){
            //         oldProduct=item;
            //     }
            // }
            //判断oldPrduct
            if(oldProduct){
                oldProduct.count+=1
            }else{
                payload.count = 1
                state.cartList.push(payload)
            }

        }
    }
})

//挂载vue实例上
export default store