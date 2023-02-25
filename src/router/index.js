import {createRouter, createWebHistory} from 'vue-router'
import index from '../views/IndexView.vue'
import login from '../views/LoginView.vue'

const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: "/",
                name: "index",
                component: index
            },
            {
                path: "/login",
                name: "login",
                component: login
            }
        ]
    }
)

export default router
