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
      default: ''
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
      inputContent: ''
    }
  },
  methods: {
    ...mapMutations(['updateUser', 'updatePassword']),

    callMutation(){
      if(this.typeInput == 'password'){
        this.updatePassword(this.inputContent)
      }else{
        this.updateUser(this.inputContent)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>