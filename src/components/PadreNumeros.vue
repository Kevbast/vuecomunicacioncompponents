<template>
  <h1>PADRE NUMEROS</h1>
  <h2 style="background-color:yellow" v-if="total !=0">La suma total es: {{total}}</h2>
  <button @click="generarNumber">GENERA NUEVOS NUMEROS</button>
  <ul>
    <li v-for="num in numbers" :key="num">
      <!-- PASAMOS LA FUNCION AL HIJO -->
    <HijoNumero :numero="num" v-on:sumarNumbersParent="sumarNumbersParent"/>
  </li>
  </ul>
</template>

<script>
import HijoNumero from './HijoNumero.vue';
export default {
  components: { HijoNumero },
name:"padreNumeros",
data(){
    return{
        numbers:[77,93,22,40,65,9],
        total:0
    }
},methods:{
    generarNumber(){
        this.numbers.push(parseInt(Math.random()*100)+ 1);
        console.log("NUMERO NUEVO INSERTADO")
    },
    sumarNumbersParent(numerohijo){
        this.total=this.total+ numerohijo;
    }
}
}//final exportdefault

</script>

<style>

</style>