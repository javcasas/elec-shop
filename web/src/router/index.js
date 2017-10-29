import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Catalogo from '@/components/Catalogo'
import CatalogoHome from '@/components/Catalogo/Home'
import Iluminacion from '@/components/Catalogo/Iluminacion'
import IluminacionHome from '@/components/Catalogo/Iluminacion/Home'
import FocoLed from '@/components/Catalogo/Iluminacion/FocoLed'
import PanelLed from '@/components/Catalogo/Iluminacion/PanelLed'

import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'

import Services from '@/components/Services'
import ServicesHome from '@/components/Services/Home'
import Returns from '@/components/Services/Devoluciones'
import Guarantee from '@/components/Services/Garantia'

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
      name: 'catalogo_home',
      component: Catalogo,
      meta: {
        breadcrumb: 'Catálogo'
      },
      children: [
        {
          path: '',
          name: 'catalogo_home',
          component: CatalogoHome,
          meta: {
            breadcrumb: 'Listado'
          }
        },
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
      path: '/services/',
      name: 'Servicios_home',
      component: Services,
      meta: {
        breadcrumb: 'Servicio al cliente'
      },
      children: [
        {
          path: '',
          name: 'Servicios_home',
          component: ServicesHome,
          meta: {
            breadcrumb: ''
          }
        },
        {
          path: 'returns',
          name: 'Returns',
          component: Returns,
          meta: {
            breadcrumb: 'Devoluciones'
          }
        },
        {
          path: 'guarantee',
          name: 'Guarantee',
          component: Guarantee,
          meta: {
            breadcrumb: 'Garantia'
          }
        }
      ]
    },
    {
      path: '/test/',
      name: 'Test',
      component: Test
    }
  ]
})
