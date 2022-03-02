<template>
  <div id="loginContainerL">
    <img src="@/assets/images/Logo-Compasso-Branco-hor1.png" alt="logo">
    <div id="greetings">
      <Title titleLogin=true control="1" text="Olá,"></Title>
      <TextContent pLogin=true text="Para continuar navegando de forma segura, efetue o login na rede."></TextContent>
    </div>
    <form @submit.prevent="loginForm" id="loginDetails">
      <Title titleDetails=true control="3" text="Login"></Title>
      <InputLogin inputText=true typeInput="text" placeHolder="Usuário" icon="usericon"></InputLogin>
      <InputLogin inputText=true typeInput="password" placeHolder="Senha" icon="lockpad"></InputLogin>
      <InputLogin inputSubmit=true typeInput="submit" text="Continuar"></InputLogin>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
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
  methods:{
    ...mapMutations(["setLoginError", "loginForm"])
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>