import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import Games from '@/views/Games.vue'
import Error from '@/views/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to) {
    if (to.name == 'Projects' || to.name == 'Games')  {
      return { x:0, y:0 }
    }
    if (to.hash) {
      return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projects/:project?',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Games/:game?',
      name: 'Games',
      component: Games
    },
    { 
      path: '/Error',
      component: Error,
      children: [
        {
          path: ':error'
        }
      ]
    },  
    { 
      path: '*', 
      redirect: '/Error/404'
    } 
  ]
})