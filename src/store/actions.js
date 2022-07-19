export default {
    addCart(context,payload){
        //查找数组中是否有该商品
        let oldProduct =context.state.cartList.find(item=>item.iid===payload.iid)
       
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
            // oldProduct.count+=1
            context.commit('addCounter',oldProduct)
        }else{
            // payload.count = 1
            context.commit('addToCart',payload)
        }

    }
}