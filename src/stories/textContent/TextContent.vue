<template>
  <p :class="classes">{{text}}</p>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Sample Text'
    },

    operator: {
      type: String,
      default: 'tempClass',
      validator: function(value){
        return['tempClass', 'cityClass', 'pContentTitle', 'pContentLast', 'pContentFooter', 'pTimerClass', 'pLoginClass'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classes(){
      return{
        [`${this.operator}`]: true
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

p{
  font-family: 'Poppins', sans-serif;
}

.tempClass{
  font-size: 48px;
}

.cityClass{
  font-size: 16px;
}

.pContentTitle{
  font-size: 24px;
  margin-bottom: 10px;
}

.pContentLast{
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.pContentFooter {
  color: #E0E0E0;
  font-size: 12px;
}

.pTimerClass {
  color: #E0E0E0;
  font-size: 14px;
}

.pLoginClass {
  color: #E0E0E0;
  font-size: 16px;
  margin-top: 17px;
}
</style>