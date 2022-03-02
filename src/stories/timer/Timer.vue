<template>
  <div class='containerTimer'>
    <div id='timerSeconds'>
      <Title timerFooter=true control="2" :text="seconds"></Title>
      <TextContent text="seconds"></TextContent>
    </div>
  </div>
</template>

<script>
import TextContent from '../textContent/TextContent.vue';
import Title from '../title/Title.vue';
export default {
  name: 'Title',
  components: {
    TextContent,
    Title,
  },
  props: {
    seconds: {
      type: Number,
      default: 600
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

.containerTimer{
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  color: white;
}

.textContent {
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: right;
  font-size: 15px;
  width: 50%;
}

#timerSeconds {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
}

</style>