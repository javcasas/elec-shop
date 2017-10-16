import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Catalogo from '@/components/Catalogo'
import Iluminacion from '@/components/Catalogo/Iluminacion'

import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/catalogo/',
      name: 'catalogo',
      component: Catalogo
    },
    {
      path: '/catalogo/iluminacion/',
      name: 'iluminacion',
      component: Iluminacion
    },
    {
      path: '/cart/',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout/',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
