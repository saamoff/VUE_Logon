<template>
  <div id="contentHome">
    <img draggable="false" src="@/assets/images/bola-LogoCompasso1.png" alt="Logo">
    <div id="textContainer">
      <Title contentHome1=true control="1" text="Our mission is"></Title>
      <TextContent pContentHome1=true text="Nossa missão é"></TextContent>
      <Title contentHome2=true control="2" text="to transform the world"></Title>
      <TextContent pContentHome1=true text="transformar o mundo"></TextContent>
      <Title contentHome2=true control="3" text="building digital experiences"></Title>
      <TextContent pContentHome2=true text="construindo experiências digitais"></TextContent>
      <Title contentHome2=true control="4" text="that enable our client’s growth"></Title>
      <TextContent pContentHome2=true text="que permitam o crescimento dos nossos clientes"></TextContent>
    </div>
  </div>
  
</template>

<script>
import Title from '@/components/title/index.vue';
import TextContent from '@/components/textContent/index.vue';
export default {
  name: 'ContentHome',
  components: {
    TextContent,
    Title
  }
}
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>