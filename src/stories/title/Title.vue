<template>
  <h1 v-if="control === '1'" :style="style" :class="classes">{{ text }}</h1>
  <h2 v-else-if="control === '2'" :style="style"  :class="classes">{{ text }}</h2>
  <h3 v-else-if="control === '3'" :style="style"  :class="classes">{{ text }}</h3>
  <h4 v-else-if="control === '4'" :style="style"  :class="classes">{{ text }}</h4>
  <h5 v-else-if="control === '5'" :style="style"  :class="classes">{{ text }}</h5>
  <h6 v-else-if="control === '6'" :style="style"  :class="classes">{{ text }}</h6>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Sample Title'
    },
    control: {
      type: String,
      default: '1',
      validator: function(value){
        return['1', '2', '3', '4', '5', '6'].indexOf(value) !== -1;
      },
    },
    textColor: {
      type: String
    },
    operator: {
      type: String,
      default: 'clockClass',
      validator: function(value){
        return['clockClass', 'contentHomeTitle', 'contentHome', 'loginTitle', 'detailsLogin', 'timerClass'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes(){
      return {
        [`${this.operator}`]: true
      }
    },
    style(){
      return {
        color: this.textColor
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}

.clockClass {
  font-size: 144px;
  font-weight: 700;
}

.contentHomeTitle{
  font-size: 36px;
  font-weight: 700;
  color: #C12D18;
}

.contentHome{
  font-size: 64px;
  font-weight: 700;
  color: #C12D18;
}

.loginTitle{
  font-size: 60px;
  color: #E0E0E0;
}

.detailsLogin{
  font-size: 30px;
  color: #E0E0E0;
  margin-top: 135px;
  margin-bottom: 32px;
}

.timerClass{
  font-size: 48px;
}
</style>