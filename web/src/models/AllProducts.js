import { Product, ProductVariant } from './Product'

const FocoLed = new Product({
  name: 'Foco LED',
  description: 'Foco LED',
  url: '/catalogo/iluminacion/foco_led/',
  image: '',
  price: 2.90,
  variants: [
    new ProductVariant({
      name: 'Foco LED (6000K)',
      description: 'Foco LED (6000K)',
      url: '/catalogo/iluminacion/foco_led/',
      image: ''
    })
  ]
})

const PanelLed = new Product({
  name: 'Panel LED',
  description: 'Panel LED',
  url: '/catalogo/iluminacion/panel_led/',
  image: '',
  price: 11.90
})

export const allProducts = [
  Product, ProductVariant
]

export const lightingProducts = [
  FocoLed,
  PanelLed
]

export default allProducts
