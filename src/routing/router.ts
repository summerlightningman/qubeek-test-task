import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import {RoutePath} from "./route-path.enum"
import {RouteName} from "./route-name.enum"
import Preview from "../pages/preview.page.vue"
import Index from "../pages/index.page.vue"

const routes: RouteRecordRaw[] = [
    {path: RoutePath.INDEX, name: RouteName.INDEX, component: Index},
    {path: RoutePath.PREVIEW, name: RouteName.PREVIEW, component: Preview},
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router