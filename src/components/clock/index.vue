<template>
  <div class='clock'>
    <div aria-labelledby="clock" id='clockContainer'>
      <Title clock=true control="1" :text="`${hour}`"></Title>
      <Title clock=true control="1" text=":"></Title>
      <Title clock=true control="1" :text="`${minutes}`"></Title>
    </div>
    <TextContent :text="`${currentDayOfWeek}, ${dayOfMonth} de ${monthShow} de ${currentYear}`"></TextContent>
  </div>
</template>

<script>
import TextContent from '@/components/textContent/index.vue';
import Title from '@/components/title/index.vue'
import {weekDay} from '../../constants/weekDay.js';
import {currentMonth} from '../../constants/currentMonth.js';
export default {
  name: 'Clock',
  components: {
    TextContent,
    Title
  },
  data() {
    return {
      hour: 0,
      minutes: 0,
      currentDayOfWeek: '',
      dayOfMonth: '',
      monthShow: '',
      currentYear: '' 
    }
  },
  methods: {
    updateTime() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let dayOfWeek = date.getDay();
      let hour = date.getHours();
      let minutes = date.getMinutes();

      this.currentDayOfWeek = weekDay[dayOfWeek]
      this.dayOfMonth = day
      this.monthShow = currentMonth[month]
      this.currentYear = year

      this.hour = hour <= 9 ? `${hour}`.padStart(2,0) : hour;
      this.minutes = minutes <= 9 ? `${minutes}`.padStart(2,0) : minutes;
    } 
  },
  mounted() {
    setInterval(() => this.updateTime(), 1000)
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>