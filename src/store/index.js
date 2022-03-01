import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginError: false,
    login: 'admin',
    password: 'admin'
  },
  getters:{
  },
  mutations: {
    setLoginError(state){
      state.loginError = true
    },

    loginForm(state){
      if(state.login == 'admin' && state.password == 'admin'){
        router.push({name:'Home'})
      }else{
        this.setLoginError()
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
