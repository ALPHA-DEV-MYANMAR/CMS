import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login";
import register from "@/views/Register";
import profile from "@/views/Profile";
import Wishlist from "@/views/Wishlist";
import ManageProfile from "@/views/ManageProfile";
import Cart from "@/views/Cart";
import Categories from "@/views/Categories";
import Detail from "@/views/Detail";
import SingleCategory from "@/views/SingleCategory";
import fourofour from "@/components/fourofour";
import StepOne from "@/views/StepOne";
import StepTwo from "@/views/StepTwo";
import StepThree from "@/views/StepThree";
import StepFour from "@/views/StepFour";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist,
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  },
  {
    path: '/manage-profile',
    name: 'manage-profile',
    component: ManageProfile,
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    beforeEnter: (to, from ,next) => {
      if(localStorage.getItem("token") ) {
        next();
      }
      else next('/login');
    },
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
  },
  {
    path: '/single-category',
    name: 'single-category',
    component: SingleCategory
  },
  {
    path: '/step-one',
    name: 'StepOne',
    component: StepOne
  },
  {
    path: '/step-two',
    name: 'StepTwo',
    component: StepTwo
  },
  {
    path: '/step-three',
    name: 'StepThree',
    component: StepThree
  },
  {
    path: '/step-four',
    name: 'StepFour',
    component: StepFour
  },
  {
    path: '/:pathMatch(.*)*', component: fourofour
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
