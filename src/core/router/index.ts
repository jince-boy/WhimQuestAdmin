import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";

const constantRouter: RouteRecordRaw[] = [
    {
        name: "index",
        path: "/",
        component: () => import("@/layout/layout.vue"),
        meta: {
            title: "首页"
        }
    },
    {
        name: 'login',
        path: '/login',
        component: () => import("@/views/login.vue"),
        meta: {
            title: '登录'
        }
    }
]
const router: Router = createRouter({
    history: createWebHistory(),
    routes: constantRouter
})
export default router;