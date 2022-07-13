import Vue from "vue"
import VueRouter from 'vue-router'

// 懒加载
const Home = ()=> import('../views/home/Home')
const Category = ()=> import('../views/category/Category')
const Profile = ()=> import('../views/profile/Profile')
const Cart = ()=> import('../views/cart/Cart')
const Detail =()=>import('../views/detail/Detail')
//安装插件
Vue.use(VueRouter)

const routes=[
    {
        path:'',
        redirect:'/home'
      },
      {
        path:'/home',
        component:Home
      },
      {
       path:'/category',
       component:Category
      },
      {
        path:'/cart',
        component:Cart
       },
       {
        path:'/profile',
        component:Profile
       },
       {
        path:'/detail/:iid',
        component:Detail
       }
]


//创建router
const router =new VueRouter({
    routes,
    mode:'history'
}) 

export default router