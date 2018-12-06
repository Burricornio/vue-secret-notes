import Vue from 'vue'
import Vuex from 'vuex'
import authModule from '@/modules/authentication'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['authModule']
})

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, bool) {
      state.loading = bool
    }
  },
  modules: {
    authModule
  },
  plugins: [ vuexLocal.plugin ]
})
