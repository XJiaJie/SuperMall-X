//防抖动函数
export function debounce(func,delay){
    let timer =null
    //...指的可以传多个参数
    return function(...args){
     if (timer) {
       clearTimeout(timer)
     }
     timer = setTimeout(()=>{
       func.apply(this,args)
     },delay)
    }
  }