import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const CateGory = () => import('views/category/CateGory')
const Cart = () => import('views/cart/Cart')
const ProFile = () => import('views/profile/ProFile')
const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect: '/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:CateGory
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:ProFile
    },
    {
        path:'/detail/:id',
        component:Detail
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

//用于捕获路由重复点击的报错
const VueRouterPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function push (to){
    return VueRouterPush.call(this,to).catch(err=>err)
}

export default router