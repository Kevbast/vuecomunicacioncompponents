<template>
  <div><h1 style="color: blueviolet;">PADRE DEPORTE</h1>
    <h2 style="background-color:yellow" v-if="favorito">Su deporte favorito es: {{favorito}}</h2>
  <ul>
    <li v-for="sport in deportes" :key="sport">
      <!-- PASAMOS LA FUNCION AL HIJO -->
    <HijoDeporte :nombredeporte="sport" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent" />
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
        deportes:["badminton","futbolin","minigolf","tennis","petanca"],
        favorito: null
    }
},
methods:{
  //PASAMOS EN EL HIJO LO QUE QUEREMOS RECIBIR AQUÍ
  seleccionarFavoritoParent(deporteFavorito){
    console.log("Yo soy tu padre");
    this.favorito=deporteFavorito;
  }
}
}
</script>

<style>

</style>