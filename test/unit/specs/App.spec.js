import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('Should add price and quantity to minibag and then subtract it', () => {
    const vm = new Vue({
      data: App.data,
      methods: App.methods
    })

    const product = { promo: false, price: { price: 110.95 } }

    vm.addToCart(product)
    expect(vm.$data.miniBag.price).to.equal(product.price.price)
    expect(vm.$data.miniBag.quantity).to.equal(1)

    vm.removeFromCart(product)
    expect(vm.$data.miniBag.price).to.equal(0)
    expect(vm.$data.miniBag.quantity).to.equal(0)
  })

  it('Should add offer price and quantity to minibag and then subtract it', () => {
    const vm = new Vue({
      data: App.data,
      methods: App.methods
    })

    const productOffer = { promo: true, price: { price: 110, offer: 80 } }

    vm.addToCart(productOffer)
    expect(vm.$data.miniBag.price).to.equal(productOffer.price.offer)
    expect(vm.$data.miniBag.quantity).to.equal(1)

    vm.removeFromCart(productOffer)
    expect(vm.$data.miniBag.price).to.equal(0)
    expect(vm.$data.miniBag.quantity).to.equal(0)
  })

  it('Should add quantity to wishlist and then remove it', () => {
    const vm = new Vue({
      data: App.data,
      methods: App.methods
    })

    const product = { promo: false, price: { price: 110.95 } }
    vm.addToWishList(product)
    expect(vm.$data.wishList).to.equal(1)
    vm.removeFromWishList(product)
    expect(vm.$data.wishList).to.equal(0)
  })
})
