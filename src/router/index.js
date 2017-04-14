import Vue from 'vue'
import Router from 'vue-router'

// Importing Pages
import ProductListing from '@/components/pages/ProductListing'
import Home from '@/components/pages/Home'

// Importing Root Components
import Header from '@/components/root/Header'
import Footer from '@/components/root/Footer'

// Importing Modules
import MiniBag from '@/components/modules/MiniBag'
import WishList from '@/components/modules/WishList'
import Product from '@/components/modules/Product.vue'
import PromoProduct from '@/components/modules/PromoProduct.vue'

// Defining Components
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('app-mini-bag', MiniBag)
Vue.component('app-wish-list', WishList)
Vue.component('app-product', Product)
Vue.component('app-promo-product', PromoProduct)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products/list',
      name: 'Product Listing',
      component: ProductListing
    }
  ]
})
