import Vue from 'vue'
import Footer from '@/components/root/Footer'

describe('Footer.vue', () => {
  it('Should render correct contents', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('h6.md-footer-info').textContent)
      .to.equal('Footer')
  })
})
