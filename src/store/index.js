import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//安装插件
Vue.use(Vuex)

//创建store对象
const state= {
    cartList:[],
    counter:0
}
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})

//挂载vue实例上
export default store