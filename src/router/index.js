import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import pdf from '../views/pdf.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pdf',
    name: 'pdf',
    component: () => import(/* webpackChunkName: "pdf" */ '../views/pdf.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
