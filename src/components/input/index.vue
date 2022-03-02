template>
  <div :class="{inputTextClass:inputText, inputSubmitClass:inputSubmit}" id="inputLogin">
    <i<nput :type="typeInput" required :placeholder="placeHolder" :value="text">
    <img v-if="icon" :src="require(`@/assets/images/${iconID}.png`)" alt="Icon">
  </div>
</template>

<script>
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
      iconID: this.icon
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>