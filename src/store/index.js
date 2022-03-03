import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginError: false,
  },
  getters:{
  },
  mutations: {
    setLoginError(state){
      state.loginError = true
    },
  },
  actions: {
  },
  modules: {
  }
})
