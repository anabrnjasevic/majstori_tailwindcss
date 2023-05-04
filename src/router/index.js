import { createRouter, createWebHistory } from 'vue-router'
import Početna from '../views/Početna.vue'
import Pločice from '../views/Pločice.vue'
import Rigips from "../views/Rigips.vue"
import Krečenje from "../views/Krečenje.vue"
import Kontakt from "../views/Kontakt.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
   
  ]
})

export default router
