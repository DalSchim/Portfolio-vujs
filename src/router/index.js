import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetView from "@/views/ProjetView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projet',
    name: 'projet',
    component: ProjetView
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
