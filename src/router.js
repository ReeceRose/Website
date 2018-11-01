import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
        }
        // ,
        // {
        // path: '/about',
        // name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})