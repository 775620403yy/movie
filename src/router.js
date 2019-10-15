import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie.vue'
import Cinema from './views/Cinema.vue'
import Mine from './views/Mine.vue'
import City from './components/City.vue'
import Search from './components/Search.vue'
import Hotcinema from './components/Hotcinema.vue'
import Comesoon from './components/Comesoon.vue'
import Detail from './components/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/movie',
      name: 'movie',
    },
    {
      path: '/movie',
      component: Movie,
      children:[
        {
          path: 'city',
          name: 'city',
          component: () => import('@/components/City')
        },
        {
          path: 'hotcinema',
          name: 'hotcinema',
          component: () => import('@/components/Hotcinema')
        },
        {
          path: 'comesoon',
          name: 'comesoon',
          component: () => import('@/components/Comesoon')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('@/components/Search')
        },
        {
          path: '/',
          redirect: '/movie/hotcinema'
        },
        {
          path: 'detail/1/:movieId',
          components:{
            default : () => import('@/components/Hotcinema'),
            detail: ()=> import('@/components/Detail')
          },
          props: {
            detail: true
          }
        },
        {
          path: 'detail/2/:movieId',
          components:{
            default : () => import('@/components/Comesoon'),
            detail: ()=> import('@/components/Detail')
          },
          props: {
            detail: true
          }
        }
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Cinema.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Mine.vue')
    }
  ]
})
