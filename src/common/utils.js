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


  export function formatDate(date, fmt) {
    //获取年份  y+表示一个或多个 正则表达式 字符串匹配利器 难 规则太多
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1,(date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    //获取
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1)? str : padLeftZero(str));
      }
    }
    return fmt;
  };
  //截取 保证04：04：04  
  function padLeftZero(str){
    return ('00' + str).substr(str.length)
  }
  