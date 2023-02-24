import {createRouter, createWebHashHistory} from 'vue-router'
import login from '../views/LoginView.vue'

const router = createRouter({
        history: createWebHashHistory(),
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
