export default {
    //mutations唯一的目的就是修改state中状态，尽可能单一一点
    addCounter(state,payload){
        payload.count++
    },
    addToCart(state,payload){
        payload.checked = true
        state.cartList.push(payload)
    },
    increment(state){
        state.counter++
    }
}