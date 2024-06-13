import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      path: '/#/',
      redirect: { name: 'Home' }
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/Works',
      name: 'Works',
      component: () => import('@/views/WorksView.vue')
    },
    {
      path: '/Skills',
      name: 'Skills',
      component:() => import('@/views/SkillsView.vue')
    },
    {
      path: '/PageNotFound',
      name: 'PageNotFound',
      component: () => import('@/views/PageNotFound.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'PageNotFound' }
    }
  ]
})

export default router
