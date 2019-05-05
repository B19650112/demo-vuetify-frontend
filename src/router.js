import Vue from 'vue'
import VueRouter from 'vue-router'
import History from './views/History'
import Leaders from './views/Leaders'
import Lists from './views/Lists'
import Products from './views/Products'
import ViewProduct from './views/ViewProduct'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'products',
        component: Products
      },
      {
        path: '/viewproduct/:id',
        name: 'viewproduct',
        component: ViewProduct
      },
      {
        path: '/leaders',
        name: 'leaders',
        component: Leaders
      },
      {
        path: '/history',
        name: 'history',
        component: History
      },
      {
        path: '/lists',
        name: 'lists',
        component: Lists
      },
    ]
  })
  