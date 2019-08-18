import Vue from 'vue'
import Vuex from 'vuex'

const storeItems = require('./assets/storeItems.json')
const storeConfig = require('./assets/storeConfig.json')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeItems,
    storeConfig,
    page: 1,
    viewingAmount: 20,
    shoppingCart: []
  },
  mutations: {
    setPage (state, payload) {
      state.page = payload
    },
    setViewingAmount (state, payload) {
      state.viewingAmount = payload
    },
    addToShoppingCart (state, payload) {
      state.shoppingCart.push(payload)
    },
    removeFromShoppingCart (state, title) {
      let itemIndex = state.shoppingCart.findIndex(item => item.title === title)

      if (itemIndex > -1) state.shoppingCart.splice(itemIndex, 1)
    }
  }
})
