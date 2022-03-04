<template>
  <div id="loginContainerL">
    <img src="@/assets/images/Logo-Compasso-Branco-hor1.png" alt="logo">
    <div aria-labelledby="greetings" id="greetings">
      <Title titleLogin=true control="1" text="Olá,"></Title>
      <TextContent pLogin=true text="Para continuar navegando de forma segura, efetue o login na rede."></TextContent>
    </div>
    <form aria-labelledby="login-details" @submit.prevent="loginForm" id="loginDetails">
      <Title titleDetails=true control="3" text="Login"></Title>
      <InputLogin inputText=true typeInput="text" placeHolder="Usuário" icon="usericon" :class="{errorBorder:loginError}"></InputLogin>
      <InputLogin inputText=true typeInput="password" placeHolder="Senha" icon="lockpad" :class="{errorBorder:loginError}"></InputLogin>
      <div aria-labelledby="error-login" id="errorLogin">
        <TextContent v-show="logged" errorMessage=false text="Ops, usuário ou senha inválidos. Tente novamente!"></TextContent>
      </div>
      <InputLogin inputSubmit=true typeInput="submit" text="Continuar"></InputLogin>
    </form>
  </div>
</template>

<script>
import router from '@/router/index.js'
import {mapMutations, mapState} from 'vuex'
import TextContent from '@/components/textContent/index.vue';
import Title from '@/components/title/index.vue';
import InputLogin from '@/components/input/index.vue';
export default {
  name: 'LoginLeft',
  components: {
    TextContent,
    Title,
    InputLogin
  },
  data(){
    return{
      logged: false
    }
  },
  methods:{
    ...mapMutations(["setLoginError"]),
    loginForm(){
      console.log(this.user)
      if(this.user == 'admin' && this.password == 'admin'){
        router.push({name:'Home'})
      }else{
        this.setLoginError()
        this.logged = true
      }
    },
  },
  computed: {
    ...mapState(['user', 'password', 'loginError'])
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>