<template>
  <div>
    <p :class="{tempClass:temperature, cityClass:city, pContentTitle:pContentHome1, pContentLast:pContentHome2, pContentFooter:pFooter, pTimerClass:pTimer, pLoginClass:pLogin, errorLoginClass:errorMessage}">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Sample Text.',
    },
    temp: {
      default: false
    },
    city: {
      default: false
    },
    pContentHome1: {
      default: false
    },
    pContentHome2: {
      default: false
    },
    pFooter: {
      default: false
    },
    pTimer: {
      default: false
    },
    pLogin: {
      default: false
    },
    errorMessage: {
      default: false
    }
  },
  data(){
    return {
      temperature: this.temp
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>