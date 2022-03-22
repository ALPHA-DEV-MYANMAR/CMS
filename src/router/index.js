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
    component: profile
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist
  },
  {
    path: '/manage-profile',
    name: 'manage-profile',
    component: ManageProfile
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/single-category',
    name: 'single-category',
    component: SingleCategory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
