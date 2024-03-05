import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetView from "@/views/ProjetView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {titel: 'Home'}
    },
    {
        path: '/projet',
        name: 'projet',
        component: ProjetView,
        meta: {titel: 'Projet'}
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {titel: 'About'}
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: {name: 'home'}

    },
    {
        path:'/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue'),
    }



]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router
