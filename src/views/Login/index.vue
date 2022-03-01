<template>
  <div class="login">
    <LoginLeft></LoginLeft>
    <LoginRight></LoginRight>
  </div>
</template>

<script>
import LoginRight from '@/containers/loginContainerRight/index.vue'
import LoginLeft from '@/containers/loginContainerLeft/index.vue'
export default {
  name: 'Login',
  components: {
    LoginRight,
    LoginLeft
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>