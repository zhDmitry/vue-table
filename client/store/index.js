import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  cells: {}
}

const mutations = {
  update (state, { key, value }) {
    Vue.set(state, key, value)
  },
  DECREMENT (state, { key, value }) {
    state.cells[key] = value
  }
}

const actions = {
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
