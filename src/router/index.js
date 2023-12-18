import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首頁'
    },
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        path: 'demo1',
        name: 'demo1',
        meta: {
          title: '功能嘗試'
        },
        component: () => import('@/views/demo/Demo1.vue')
      },
      {
        path: 'demo2',
        name: 'demo2',
        meta: {
          title: '顏色'
        },
        component: () => import('@/views/demo/Demo2.vue')
      },
      {
        path: 'demo3',
        name: 'demo3',
        meta: {
          title: 'Transitions 動畫效果'
        },
        component: () => import('@/views/demo/Demo3.vue')
      },
      {
        path: 'demo4',
        name: 'demo4',
        meta: {
          title: '表單'
        },
        component: () => import('@/views/demo/Demo4.vue')
      },
      {
        path: 'demo5',
        name: 'demo5',
        meta: {
          title: '表格'
        },
        component: () => import('@/views/demo/Demo5.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0 //* 切換頁面時會切換到最上面的位置
      }
    }
    return {}
  }
})
// 頁面跳轉時 更改網頁title
router.beforeEach((to, from, next) => {
  const { title } = to.meta
  document.title = title

  next()
})

export default router
