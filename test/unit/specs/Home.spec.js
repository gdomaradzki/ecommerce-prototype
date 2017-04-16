import Vue from 'vue'
import Home from '@/components/pages/Home'

describe('Home.vue', () => {
  it('Should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('h1.md-brands__title').textContent)
      .to.equal('check our available brands')

    expect(vm.$el.querySelector('h2.md-brands__title').textContent)
      .to.equal('or check our complete product list')

    expect(vm.$el.querySelector('h1.md-new-products__title').textContent)
      .to.equal('new products')

    expect(vm.$el.querySelector('h1.md-current-offers__title').textContent)
      .to.equal('current offers')
  })
})
