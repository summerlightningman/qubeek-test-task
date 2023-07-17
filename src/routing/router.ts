import { createRouter, RouteRecordRaw } from 'vue-router'
import {RoutePath} from "./route-path.enum.ts"
import {RouteName} from "./route-name.enum.ts"
import Preview from "../pages/preview.page.vue"
import Index from "../pages/index.page.vue"

const routes: RouteRecordRaw[] = [
    {path: RoutePath.INDEX, name: RouteName.INDEX, component: Index},
    {path: RoutePath.PREVIEW, name: RouteName.PREVIEW, component: Preview},
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router