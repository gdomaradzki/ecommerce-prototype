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

// Defining Components
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('app-mini-bag', MiniBag)
Vue.component('app-wish-list', WishList)
Vue.component('app-product', Product)

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
    },
    {
      path: '/products/:brand/list',
      name: ':brand',
      component: ProductListing
    }
  ]
  // let c4 = {
  //   name: "Jaqueta bomber 'Kenzo X K-Way' dupla face",
  //   url: "https://cdn-images.farfetch-contents.com/12/02/22/39/12022239_9592554_480.jpg",
  //   description: "Jaqueta bomber 'Kenzo X K-Way' dupla face preta e estampada, KENZO KIDS. Possui capuz, fechamento frontal por zíper, estampa corrida, mangas longas e punhos e bainha canelados.",
  //   stock: 20,
  //   type: "Jaqueta",
  //   products: "Kids",
  //   brand: "Kenzo",
  //   newProducts: true,
  //   promo: false,
  //   price: {
  //     price: 150
  //   }
  // }
})
