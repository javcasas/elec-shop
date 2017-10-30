export class Product {
  constructor (props) {
    this.name = props.name
    this.description = props.description
    this.image = props.image
    this.url = props.url
    this.price = props.price
    this.variants = (props.variants || []).forEach(x => { x.product = this })
  }
}

export class ProductVariant {
  constructor (overrides) {
    this.overrides = overrides
  }
  get name () {
    return this.overrides.name || this.product.name
  }
  get description () {
    return this.overrides.description || this.product.description
  }
  get image () {
    return this.overrides.image || this.product.image
  }
  get url () {
    return this.overrides.url || this.product.url
  }
  get price () {
    return this.overrides.price || this.product.price
  }
}
