import {createRouter, createWebHistory} from 'vue-router'
import login from '../views/login.vue'

const routerHistory = createWebHistory()
const router = createRouter({
        history: routerHistory,
        routes: [
            {
                path: "/login",
                name: "login",
                component: login
            }
        ]
    }
)

export default router
