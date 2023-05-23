import { createRouter, createWebHistory } from 'vue-router'

const Početna = () => import('../views/Početna.vue')
const Rigips = () => import('../views/Rigips.vue')
const Pločice = () => import('../views/Pločice.vue')
const Kontakt = () => import('../views/Kontakt.vue')
const Krečenje = () => import('../views/Krečenje.vue')



const router = createRouter({
  history: createWebHistory('/github.com/anabrnjasevic/majstori_tailwindcss/'),
  routes: [
    {
      path: '/',
      name: 'Početna',
      component: Početna,
    },
    {
      path: "/plocice",
      name: "Pločice",
      component: Pločice,
      meta: { transition: "slide-fade-r" },
    },
    {
      path: "/rigips",
      name: "Rigips",
      component: Rigips,
      meta: { transition: "slide-fade-r" },
    },
    {
      path: "/krečenje",
      name: "Krečenje",
      component: Krečenje,
      meta: { transition: "slide-fade-r" },
    },
  
    {
      path: "/kontakt",
      name: "Kontakt",
      component: Kontakt,
      meta: { transition: "slide-fade-r" },
    },
    {
      path:"/index.html",
      name: 'index.html'
    },
    { path: '/:pathMatch(.*)*', 
    beforeEnter: (to, from, next) => { next('/404') } },

   
  ]
})

export default router
