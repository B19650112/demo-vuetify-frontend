import Vue from 'vue'
import VueRouter from 'vue-router'
// import History from './views/History'
// import Leaders from './views/Leaders'
// import Lists from './views/Lists'
import Home from './views/Home'
// import ViewProduct from './views/ViewProduct'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
  ]
})