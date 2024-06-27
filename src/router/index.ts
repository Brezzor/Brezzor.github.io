import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

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
      component: () => import('@/views/SkillsView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/Feed',
      name: 'Feed',
      component: () => import('@/views/FeedView.vue'),
      meta: {
        requiresAuth: true
      }
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert('Acces denied! You have to login.')
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
