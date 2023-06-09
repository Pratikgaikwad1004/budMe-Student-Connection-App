import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Happening from '../views/HappeningView.vue'
import eventRegistrationForm from '@/views/eventRegistrationForm.vue'
import ProjectRegistrationForm from '@/views/ProjectRegistrationForm'
import AddPosts from '@/views/AddPosts'
import ProjectRequests from '@/views/ProjectRequests'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "about" */ '../views/AccountPage.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatView.vue')
  }, 
  {
    path: '/chat/:userid',
    name: 'mychat',
    component: () => import(/* webpackChunkName: "about" */ '@/views/MyChats.vue')
  }, 
  {
    path: '/collab',
    name: 'collab',
    component: () => import(/* webpackChunkName: "about" */ '../views/CollabView.vue')
  }, 
  {
    path: '/happening',
    name: 'happening',
    component: Happening
  },
  {
    path: '/registerevent',
    name: 'registerevent',
    component: eventRegistrationForm
  },
  {
    path: '/registerproject',
    name: 'registerproject',
    component: ProjectRegistrationForm
  },
  {
    path: '/addposts',
    name: 'addposts',
    component: AddPosts
  },
  {
    path: '/projectrequests',
    name: 'projectrequests',
    component: ProjectRequests
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
