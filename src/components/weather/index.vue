<template>
  <div id='weatherContainer'>
    <TextContent city=true :text="`${currentCity} - ${currentState}`"></TextContent>
    <div>
      <img draggable="false" :src="require(`@/assets/iconsWeather/${currentCondition}.png`)" alt="icon">
      <TextContent temp=true :text="`${currentTemp}°`"></TextContent>
    </div>
  </div>
</template>

<script>
import TextContent from '@/components/textContent'
export default {
  name: 'Weather',
  components: {
    TextContent
  },
  data(){
    return{
      currentTemp: '',
      currentCity: '',
      currentState: '',
      currentCondition: {
        default: 'sun'
      }
    }
  },
  methods: {
    weather() {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
          let long = position.coords.longitude;
          let lat = position.coords.latitude;

          fetch(`http://api.weatherapi.com/v1/current.json?key=c54d9525f89c41f0a7c194602220202&q=${lat},${long}`)
            .then((response) => response.json())
            .then((data) => {
            
              const province = data.location.region;
              this.currentState = this.stateAbbreviation(province);

              let temperature = data.current.temp_c;
              temperature = temperature.toFixed(0);
              this.currentTemp = temperature;

              let icon = data.current.condition.icon;
              const iconText = data.current.condition.text;
              icon = this.weatherIcon(icon, iconText);
              this.currentCondition = icon

              this.geoLocation(lat,long).then(getCity => {this.currentCity = getCity})
            });
        });
      }
    },
    stateAbbreviation(province){
      let currentState = '';
      switch(province){
        case 'Acre':
          currentState = 'AC';
        break;
        case 'Alagoas':
          currentState = 'AL';
        break;
        case 'Amapá':
          currentState = 'AP';
        break;
        case 'Amazonas':
          currentState = 'AM';
        break;
        case 'Bahia':
          currentState = 'BA';
        break;
        case 'Ceará':
          currentState = 'CE';
        break;
        case 'Espírito Santo':
          currentState = 'ES';
        break;
        case "Goiás":
          currentState = "GO";
        break;
        case "Maranhão":
          currentState = "MA";
        break;
        case "Mato Grosso":
          currentState = "MT";
        break;
        case "Mato Grosso do Sul":
          currentState = "MS";
        break;
        case "Minas Gerais":
          currentState = "MG";
        break;
        case "Pará":
          currentState = "PA";
        break;
        case "Paraíba":
          currentState = "PB";
        break;
        case "Paraná":
          currentState = "PR";
        break;
        case "Pernambuco":
          currentState = "PE";
        break;
        case "Piauí":
          currentState = "PI";
        break;
        case "Rio de Janeiro":
          currentState = "RJ";
        break;
        case "Rio Grande do Norte":
          currentState = "RN";
        break;
        case "Rio Grande do Sul":
          currentState = "RS";
        break;
        case "Rondônia":
          currentState = "RO";
        break;
        case "Roraima":
          currentState = "RR";
        break;
        case "Santa Catarina":
          currentState = "SC";
        break;
        case "São Paulo":
          currentState = "SP";
        break;
        case "Sergipe":
          currentState = "SE";
        break;
        case "Tocantins":
          currentState = "TO";
        break;
      }
      return currentState
    },
    weatherIcon(icon, iconText){
      if(iconText.includes('thunder') && iconText.includes('rain')){
        icon = 'storm';
      }else if(iconText.includes('thunder')){
        icon = 'thunder';
      }else if(iconText.includes('rain') || iconText.includes('drizzle')){
        icon = 'raining';
      }else if(iconText.includes('Fog') || iconText.includes('Mist')){
        icon = 'cloud'
      }else if(iconText.includes('Cloudy') || iconText.includes('cloudy') || iconText.includes('Overcast')){
        icon = 'cloudy'
      }else if(iconText.includes('Sunny') || iconText.includes('Clear')){
        icon = 'sun'
      }
      return icon
    },
    geoLocation(lat, lng){
      let getCity = fetch("https://us1.locationiq.com/v1/reverse.php?key=pk.09bcd861996d53b8068b3adc599c892d&lat=" + lat + "&lon=" + lng + "&format=json")
      .then(reply => reply.json())
      .then(data => {
        return data.address.city
      })
      return getCity
    }
  },
  mounted(){
    this.weather()
  },
}
</script>

<style lang='scss' scoped>
@import './index.scss'
</style>