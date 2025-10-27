<template>
  <div><h2 style="color: brown;">HIJO DEPORTE</h2></div>
  <strong>{{nombredeporte}}</strong>
</template>

<script>
export default {
name:"HijoDeporte",
props:["nombredeporte"]//RECOGEMOS AQUÍ EL PROP
,mounted(){
    console.log(this.nombredeporte)
}
}
</script>

<style>

</style>