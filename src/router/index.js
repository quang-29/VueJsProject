import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { compile } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'


const requireAuth = (to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('token') 
  if (isLoggedIn) {
    next()
  } else {
    next({name: 'signIn'})
  }
}

// const requireAuth = (to, from, next) => {
//   const isLoggedIn = !!localStorage.getItem('token') // hoặc dùng Pinia/Vuex nếu có
//   if (isLoggedIn) {
//     next()
//   } else {
//     next({ name: 'signIn' }) // chuyển hướng nếu chưa đăng nhập
//   }
// }


const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: { requireAuth: true }
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/About.vue'),
        meta: { requireAuth: true }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/Profile.vue'),
        meta: { requireAuth: true }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/Cart.vue')
      },
      {
        path: 'book/:id',
        name: 'bookDetail',
        component: () => import('@/views/BookDetail.vue')
      },
      {
        path: 'categoryBook/:id',
        name: 'categoryBook',
        component: () => import('@/views/ListVerticalBook.vue')
      },
      {
        path: 'discount',
        name: 'discount',
        component: () => import('@/views/Discount.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/Order.vue')
      },
      {
        path: 'course',
        name: 'Course',
        component: () => import('@/views/Course.vue')
      }
    ]
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: 'signIn',
        name: 'signIn',
        component: () => import('@/views/SignIn.vue')
      },
      {
        path: 'signUp',
        name: 'signUp',
        component: () => import('@/views/SignUp.vue')
      },
      {
        path: 'administrator',
        name: 'Administrator',
        component: () => import('@/views/Administrator.vue'),
        meta: { requireAuth: true }
      },
      {
        path: 'Screen',
        name: 'Screen',
        component: () => import('@/views/ShowAllScreen.vue')
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
 router.beforeEach((to, from, next) => {
    const isLoggIn = localStorage.getItem('token')
    if(to.meta.requireAuth && !isLoggIn){
      console.log("Before Each")
      console.log("Chưa đăng nhập, chuyển về LogIn")
      next({name: 'signIn'})
    } else {
      next()
    }
  })

  router.beforeResolve((to,from,next) => {
    console.log("Before Resolve")
    next()
  })

export default router
