import Vue from 'vue'
import Router from 'vue-router'
const HomePage = () => import('../views/homepage/HomePage.vue')
const Class = () => import('../views/classification/Classification.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Register = () => import('../views/register/Register.vue')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },{
      path:'/home',
      component:HomePage
    },{
      path:'/class',
      component:Class
    },{
      path:'/cart',
      component:Cart
    },{
      path:'/register',
      component:Register
    }
  ],
  mode:'history'
})
