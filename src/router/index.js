import HomePage from '@/views/HomePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [{
    path:'/register',
    name: 'Register',
    component: () => import('../views/RegisterPage.vue')
},{
  
    path:'/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
},{
  
  path:'/',
  name: 'Home',
  component: HomePage
},{
  
  path:'/products',
  name: 'Products',
  component: () => import('../views/ProductsPage.vue')
}
,{
  
  path:'/productsdetails/:id',
  name: 'Productsdetails',
  component: () => import('../views/ProductsDetails.vue')
}
,{
  
  path:'/categorydetails/:id',
  name: 'categorydetails',
  component: () => import('../views/CategoryPage.vue')
}
,{
  
  path:'/allorders',
  name: 'allorders',
  component: () => import('../views/AllOrders.vue')
}
,{
  
  path:'/cart',
  name: 'cart',
  component: () => import('../views/CartPage.vue')
}
,{
  
  path:'/wishlist',
  name: 'wishlist',
  component: () => import('../views/WishList.vue')
}
],
})
router.beforeEach((to,from,next)=>{
  const isAuthenticated =localStorage.getItem('tokenUser')
  if(to.name !=='Login'&& to.name !=='Register' && !isAuthenticated){
    next({name:'Login'})
  }else if((to.name ==='Login' || to.name ==='Register') && isAuthenticated){
    next({name:'Home'})

  }
  else{
    next()
  }
})
export default router
