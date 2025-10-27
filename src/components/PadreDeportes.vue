<template>
  <div><h1 style="color: blueviolet;">PADRE DEPORTE</h1>
  
  <ul>
    <li v-for="sport in deportes" :key="sport">
    <HijoDeporte :nombredeporte="sport" />
  </li>
  </ul>
  </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue';

export default {
name:"PadreDeportes",
components:{
    HijoDeporte
},
data(){
    return{
        deportes:["badminton","futbolin","minigolf","tennis","petanca"]
    }
}
}
</script>

<style>

</style>