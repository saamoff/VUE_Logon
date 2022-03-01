<template>
  <div id="footerHome">
    <div id="container1">
      <TextContent pFooter=true text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."></TextContent>
    </div>
    <span id="border"></span>
    <div id="container2">
      <TextContent pTimer=true text="Application refresh in"></TextContent>
    </div>
    <Timer id="timerContainer"></Timer>
    <div id="continueNav">
      <button>Continuar<br>Navegando</button>
    </div>
    <div id="logout">
      <button>Logout</button>
    </div>
  </div>
</template>

<script>
import TextContent from '@/components/textContent/index.vue';
import Timer from '@/components/timer/index.vue'
export default {
  name: 'HomeFooter',
  components: {
    TextContent,
    Timer
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>