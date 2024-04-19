import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Customers from '../views/Customers.vue'

const history = createWebHistory()

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers,
  }
]

const router = createRouter({
  history,
  routes
})

export default router