import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import WorksView from '../views/WorksView.vue'
import SkillsView from '@/views/SkillsView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

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
      component: HomeView
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/Works',
      name: 'Works',
      component: WorksView
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: SkillsView
    },
    {
      path: '/PageNotFound',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'PageNotFound' }
    }
  ]
})

export default router
