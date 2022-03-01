<template>
  <div id=headerContainer>
    <img draggable="false" src="@/assets/images/LogoCompasso1.png" alt="Logo">
    <clock></clock>
    <weather></weather>
  </div>
</template>

<script>
import Clock from '@/components/clock/index.vue'
import Weather from '@/components/weather/index.vue'
export default {
  name: 'Header',
  components: {
    Clock,
    Weather
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>