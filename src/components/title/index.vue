<template>
  <h1 v-if="control === '1'" :class="{contentHomeTitle:contentHome1, contentHome:contentHome2, clockClass:clock, loginTitle:titleLogin, detailsLogin:titleDetails}">{{ text }}</h1>
  <h2 v-else-if="control === '2'" :class="{contentHomeTitle:contentHome1, contentHome:contentHome2, clockClass:clock, loginTitle:titleLogin, detailsLogin:titleDetails}">{{ text }}</h2>
  <h3 v-else-if="control === '3'" :class="{contentHomeTitle:contentHome1, contentHome:contentHome2, clockClass:clock, loginTitle:titleLogin, detailsLogin:titleDetails}">{{ text }}</h3>
  <h4 v-else-if="control === '4'" :class="{contentHomeTitle:contentHome1, contentHome:contentHome2, clockClass:clock, loginTitle:titleLogin, detailsLogin:titleDetails}">{{ text }}</h4>
  <h5 v-else-if="control === '5'" :class="{contentHomeTitle:contentHome1, contentHome:contentHome2, clockClass:clock, loginTitle:titleLogin, detailsLogin:titleDetails}">{{ text }}</h5>
  <h6 v-else-if="control === '6'" :class="{contentHomeTitle:contentHome1, contentHome:contentHome2, clockClass:clock, loginTitle:titleLogin, detailsLogin:titleDetails}">{{ text }}</h6>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Sample Title',
    },
    control: {
      type: String,
      required: true,
      default: '1',
    },
    clock: {
      default: false
    },
    contentHome1: {
      default: false
    },
    contentHome2: {
      default: false
    },
    titleLogin: {
      default: false
    },
    titleDetails: {
      default: false
    }
  },
}
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>