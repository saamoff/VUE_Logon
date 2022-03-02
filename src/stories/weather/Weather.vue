<template>
  <div id='weatherContainer'>
    <TextContent city=true :text="`${currentCity} - ${currentState}`"></TextContent>
    <div>
      <img draggable="false" :src="require(`../assets/iconsWeather/${currentCondition}.png`)" alt="icon">
      <TextContent temp=true :text="`${currentTemp}°`"></TextContent>
    </div>
  </div>
</template>

<script>
import TextContent from '../textContent/TextContent.vue'
export default {
  name: 'Weather',
  components: {
    TextContent,
  },
  props: {
    currentCondition: {
      type: String,
      default: 'storm',
      validator: function(value){
        return['cloudy', 'cloud', 'thunder', 'storm', 'raining', 'sun'].indexOf(value) !== -1;
      },
    },
    currentTemp: {
      type: String,
      default: '17',
    },
    currentCity: {
      type: String,
      required: true,
      default: 'Juiz de Fora'
    },
    currentState: {
      type: String,
      default: 'MG',
      validator: function(value){
        return['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'].indexOf(value) !== -1;
      },
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

#weatherContainer{
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
}

div{
  display: flex;
  position: relative;
}

img{
  width: 5%;
  height: 5%;
  margin-right: 12px;
}

</style>