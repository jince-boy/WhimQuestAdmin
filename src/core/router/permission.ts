import router from "@/core/router";
import {NavigationGuardNext, RouteLocationNormalized} from "vue-router";
import useLoadingBarStore from "@/core/pinia/LoadingBarStore.ts";

router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    // 设置标题
    document.title = to.meta.title as string;
    // 加载条
    useLoadingBarStore().loadingBar?.start()
    next();
})
router.afterEach(() => {
    // 加载条
    useLoadingBarStore().loadingBar?.finish()
})