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
    viewingAmount: 20
  },
  mutations: {
    setPage (state, payload) {
      state.page = payload
    },
    setViewingAmount (state, payload) {
      state.viewingAmount = payload
    }
  }
})
