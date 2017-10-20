import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Catalogo from '@/components/Catalogo'
import Iluminacion from '@/components/Catalogo/Iluminacion'
import IluminacionHome from '@/components/Catalogo/Iluminacion/Home'
import FocoLed from '@/components/Catalogo/Iluminacion/FocoLed'
import PanelLed from '@/components/Catalogo/Iluminacion/PanelLed'

import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'

import Test from '@/components/Test'

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
      path: '/catalogo',
      name: 'catalogo',
      component: Catalogo,
      meta: {
        breadcrumb: 'Catálogo'
      },
      children: [
        {
          path: 'iluminacion',
          name: 'iluminacion_home',
          component: Iluminacion,
          meta: {
            breadcrumb: 'Iluminación'
          },
          children: [
            {
              path: '',
              name: 'iluminacion_home',
              component: IluminacionHome,
              meta: {
                breadcrumb: 'Listado'
              }
            },
            {
              path: 'foco_led',
              name: 'foco_led',
              component: FocoLed,
              meta: {
                breadcrumb: 'Focos LED'
              }
            },
            {
              path: 'panel_led',
              name: 'panel_led',
              component: PanelLed,
              meta: {
                breadcrumb: 'Panel LED'
              }
            }
          ]
        }
      ]
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
    },
    {
      path: '/test/',
      name: 'Test',
      component: Test
    }
  ]
})
