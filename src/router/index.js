import Vue from 'vue'
import Router from 'vue-router'

// Importing Pages
import ProductListing from '@/components/pages/ProductListing'

// Importing Root Components
import Header from '@/components/root/Header'

// Importing Modules
import MiniBag from '@/components/modules/MiniBag'
import WishList from '@/components/modules/WishList'

// Defining Components
Vue.component('app-header', Header)
Vue.component('app-mini-bag', MiniBag)
Vue.component('app-wish-list', WishList)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product Listing',
      component: ProductListing
    }
  ]
})
