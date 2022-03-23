import { createRouter,createWebHashHistory} from 'vue-router'

const home = () => import("src/page/home/index")
const login = () => import("src/page/login/index")

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  }
]

// export const constantRoutes = [
//   { path: "/", redirect: "/login" },
//   {
//     path: '/login',
//     component: () => import('src/page/login/index')
//   }
// ]


// const router = VueRouter.createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: VueRouter.createWebHashHistory(),
//   routes, // short for `routes: routes`
// })

// import { router } from ./router
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const createRouter = () => new Router({
//   mode: 'history', // require service support
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRoutes
// })

// const router = Router.createRouter({
//   history: Router.createWebHashHistory(),
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRoutes, // short for `routes: routes`
// })

// const router = createRouter()

// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

// export default router // 默认导出，引入直接 import router from ./router