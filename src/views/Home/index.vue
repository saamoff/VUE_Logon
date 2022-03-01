<template>
  <div class="home">
    <Header></Header>
    <ContentHome></ContentHome>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import Header from '@/containers/header/index.vue'
import ContentHome from '@/containers/contentHome/index.vue'
import HomeFooter from '@/containers/homeFooter/index.vue'
export default {
  name: 'Home',
  components: {
    Header,
    ContentHome,
    HomeFooter
  }
}
</script>