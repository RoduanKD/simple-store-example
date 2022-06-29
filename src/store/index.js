import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    products: []
  }
})

axios.get('https://fakestoreapi.com/products').then(res => {
  store.state.products = res.data
})

export default store
