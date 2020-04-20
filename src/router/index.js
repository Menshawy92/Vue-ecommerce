import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminRoutes from '@/router/Admin/index.js'

Vue.use(VueRouter)

const baseRoutes = []
const routes = [...baseRoutes, ...AdminRoutes]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
