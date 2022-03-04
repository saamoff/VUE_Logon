<template>
  <div :class="{inputTextClass:inputText, inputSubmitClass:inputSubmit}" id="inputLogin">
    <input :type="typeInput" required :placeholder="placeHolder" :value="text" v-model="inputContent" @blur="callMutation">
    <img v-if="icon" :src="require(`@/assets/images/${iconID}.png`)" alt="Icon">
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'InputLogin',
  props: {
    typeInput: {
      type: String,
      default: 'text'
    },
    placeHolder: {
      type: String,
      default: 'Sample Text'
    },
    text: {
      type: String,
      default: 'Continuar'
    },
    icon: {
      type: String,
      default: ''
    },
    inputText: {
      default: false
    },
    inputSubmit: {
      default: false
    }
  },
  data(){
    return {
      iconID: this.icon,
      inputContent: 'Continuar'
    }
  },
  methods: {
    ...mapMutations(['updateUser', 'updatePassword']),

    callMutation(){
      if(this.typeInput == 'password'){
        this.updatePassword(this.inputContent)
        return this.$sanitize(this.inputContent)
      }else{
        this.updateUser(this.inputContent)
        return this.$sanitize(this.inputContent)
      }
    },

    resetField(){
      if(this.typeInput != 'submit'){
        this.inputContent = ''
      }
    }
  },
  created(){
    this.resetField()
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>