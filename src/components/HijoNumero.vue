<template>
  <h1>Hijo  numero: {{ numero }}</h1>
  <button @click="seleccionarNumber">
    Seleccionar número {{ numero }}
  </button>
</template>

<script>
export default {
name:"HijoNumero",
props:["numero"],
methods:{
    seleccionarNumber(){
    console.log("Soy el hijo");
    //LLAMAMOS AL MÉTODO DEL PADRE
    this.$emit("sumarNumbersParent",this.numero);
  }
}
}
</script>

<style>

</style>