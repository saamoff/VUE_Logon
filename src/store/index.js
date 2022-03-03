import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginError: false,
    user: '',
    password: '',
  },
  getters:{
  },
  mutations: {
    setLoginError(state){
      state.loginError = true
    },
    updateUser(state, user){
      state.user = user
    },
    updatePassword(state, password){
      state.password = password
    }
  },
  actions: {
  },
  modules: {
  }
})
