import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const CateGory = () => import('views/category/CateGory')
const Cart = () => import('views/cart/Cart')
const ProFile = () => import('views/profile/ProFile')

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
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})


export default router