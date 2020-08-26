import { EventBus } from '~/plugins/event-bus'
export default {
  state: () => ({
    apiInformations: {}
  }),
  mutations: {
    updateAPI: function (state, data) {
      state.apiInformations = data
      EventBus.$emit('APIfetched')
    }
  },
  actions: {
    fetchAPI: async function ({ commit }) {
      let response = await fetch('http://176.9.192.123:3000/stats')
      response = await response.json()
      commit('updateAPI', response)
    }
  }
}