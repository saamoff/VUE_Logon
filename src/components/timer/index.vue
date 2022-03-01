<template>
  <div class='containerTimer'>
    <div id='timerSeconds'>
      <Title timerFooter=true control="2" :text="seconds"></Title>
      <TextContent text="seconds"></TextContent>
    </div>
  </div>
</template>

<script>
import TextContent from '@/components/textContent'
import Title from '@/components/title/index.vue'
import router from '@/router/index.js'
export default {
  name: 'Timer',
  components: {
    TextContent,
    Title
  },
  data() {
    return {
      seconds: '',
      timerShow: true
    }
  },
  methods: {
    timerUpdate(){
      if(this.timerShow){
        this.seconds --;
        if(this.seconds == 0){
          this.stop()
        }
      }
    },
    stop(){
      this.timerShow = false;
      router.push({name:'Login'})
    }
  },
  created(){
    this.seconds = 600
    setInterval(() => {
      this.timerUpdate()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>