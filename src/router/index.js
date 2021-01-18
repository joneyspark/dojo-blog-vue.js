import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Details from '../views/Details.vue'
import Create from "../views/Create.vue"
import Tag from '../views/Tag.vue'

const routes = [
  /* {
    path: '/',
    name: 'Home',
    component: Home
  }, */
  {
    path: '/',
    name: 'Home',
    component: About
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: Tag,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
