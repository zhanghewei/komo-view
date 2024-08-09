import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import home from '@/views/home/index.vue'


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: home
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
