<template>
  <div id="loginContainerL">
    <div id="greetings">
      <Title titleLogin=true control="1" text="Olá,"></Title>
      <TextContent pLogin=true text="Para continuar navegando de forma segura, efetue o login na rede."></TextContent>
    </div>
    <form id="loginDetails">
      <Title titleDetails=true control="3" text="Login"></Title>
      <InputLogin inputText=true typeInput="text" placeHolder="Usuário" icon="usericon"></InputLogin>
      <InputLogin inputText=true typeInput="password" placeHolder="Senha" icon="lockpad"></InputLogin>
      <InputLogin inputSubmit=true typeInput="submit" innerHTML="Continuar"></InputLogin>
    </form>
  </div>
</template>

<script>
import TextContent from '@/components/textContent/index.vue';
import Title from '@/components/title/index.vue';
import InputLogin from '@/components/input/index.vue';
export default {
  name: 'LoginLeft',
  components: {
    TextContent,
    Title,
    InputLogin
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>