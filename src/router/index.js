import { createRouter, createWebHashHistory } from 'vue-router'
import Cart from '../views/Cart.vue'
import Detail from '../views/Detail.vue'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        }
    ]
})

export default router