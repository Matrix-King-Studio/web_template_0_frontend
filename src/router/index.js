import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
    },
]

const router = new VueRouter({
    mode: "hash",
    routes,
})

export default router
