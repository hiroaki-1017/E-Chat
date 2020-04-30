export const strict = false

export const state = () => ({
  user: null,
  isMenuActive: false
})

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  toggleMenu (state) {
    state.isMenuActive = !state.isMenuActive
  },
  resetMenu (state) {
    state.isMenuActive = false
  }
}

export const actions = {
  setUser ({ commit }, payload) {
    commit('setUser', payload)
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}