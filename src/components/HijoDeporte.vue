<template>
  <div><h2 style="color: brown;"><strong>{{nombredeporte}}</strong></h2></div>
  
  <button @click="seleccionaFavorito">
    Seleccionar Favorito
  </button>
</template>

<script>
export default {
name:"HijoDeporte",
props:["nombredeporte"]//RECOGEMOS AQUÍ EL PROP
,mounted(){
    console.log(this.nombredeporte)
},methods:{
  seleccionaFavorito(){
    console.log("Soy el hijo");
    //LLAMAMOS AL MÉTODO DEL PADRE
    this.$emit("seleccionarFavoritoParent",this.nombredeporte)
  }
}
}
</script>

<style>

</style>