import {createRouter, createWebHistory, Router, RouteRecordRaw} from "vue-router";

const constantRouter: RouteRecordRaw[] = [
    {
        name: "index",
        path: "/",
        component: () => import("@/layout/layout.vue"),
        meta: {
            title: "首页"
        }
    }
]
const router: Router = createRouter({
    history: createWebHistory(),
    routes: constantRouter
})
export default router;