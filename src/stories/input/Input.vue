<template>
  <div :class="classes" id="inputLogin">
    <input :type="typeInput" required :placeholder="placeHolder" :value="text">
    <img v-if="icon" :src="require(`../assets/${iconID}.png`)" alt="Icon">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    text: {
      tpye: String,
      default: ''
    },
    typeInput: {
      type: String,
      validator: function(value){
        return['text', 'password', 'submit'].indexOf(value) !== -1;
      }
    },
    placeHolder: {
      type: String,
      validator: function(value){
        return['Usuario', 'Senha'].indexOf(value) !== -1;
      }
    },
    class: {
      type: String,
      default: 'inputTextClass',
      validator: function(value){
        return['inputTextClass', 'inputSubmitClass'].indexOf(value) !== -1;
      }
    },
    iconID: {
      type: String,
      validator: function(value){
        return['usericon', 'lockpad', false].indexOf(value) !== -1;
      }
    },
  },
  computed: {
    classes(){
      return {
        [`${this.class}`]: true,
        'submit': this.type == 'inputSubmitClass'
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

#inputLogin{
  width: 100%;
  font-family: 'Poppins', sans-serif;
}

img{
  padding-left: 100px; 
}

input{
  background: transparent;
  border: 0;
  color: #E0E0E0;
}

input:focus{
  outline-width: 0;
}

.inputTextClass{
  width: 100%;
  height: 60px;
  background: transparent;
  background: #26292c;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 9%;
}

.inputSubmitClass{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  height: 60px;
}

</style>