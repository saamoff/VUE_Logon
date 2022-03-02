<template>
  <div class='clock'>
    <div id='clockContainer'>
      <Title clock=true control="1" :text="`${hour}`"></Title>
      <Title clock=true control="1" text=":"></Title>
      <Title clock=true control="1" :text="`${minutes}`"></Title>
    </div>
    <div id="dateContainer">
      <TextContent :text="`${crrentDayOfWeeuk}, ${dayOfMonth} de ${monthShow} de ${currentYear}`"></TextContent>
    </div>
  </div>
</template>


<script>
import TextContent from '../textContent/TextContent.vue'
import Title from '../title/Title.vue'
export default {
  name: 'Clock',
  components: {
    TextContent,
    Title,
  },
  props: {
    hour: {
      type: String,
      default: '00',
      validator: function(value){
        return['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'].indexOf(value) !== -1;
      },
    },
    minutes: {
      type: String,
      default: '00',
      validator: function(value){
        return['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'].indexOf(value) !== -1;
      },
    },
    currentDayOfWeek: {
      type: String,
      default: 'segunda-feira',
      validator: function(value){
        return['domingo', 'segunda-feira', 'terça-feria', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'].indexOf(value) !== -1;
      },
    },
    dayOfMonth: {
      type: String,
      default: '03',
      validator: function(value){
        return['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'].indexOf(value) !== -1;
      },
    },
    monthShow: {
      type: String,
      default: 'abril',
      validator: function(value){
        return['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'].indexOf(value) !== -1;
      },
    },
    currentYear: {
      type: String,
      default: '2022'
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

.clock {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 265px;
}

#clockContainer {
  display: flex;
  height: 50%;
  margin-top: 120px;
}

#dateContainer{
  margin-top: 100px;
}
</style>