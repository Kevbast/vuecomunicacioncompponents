<template>
  <h1>NUMERO DOBLE</h1>
  <h2 style="color: brown;">{{ mensaje }}</h2>
  <h2 style="color: brown;">El doble es: {{doble }}</h2>
    <button @click="redirecToHome">LLEVAR A HOME</button>
</template>

<script>
export default {
name:"NumeroDoble",
data(){
    return{
        mensaje:"",
        doble:0
    }
},
//PARA RECIBIR/CAPTURAR LOS PARÁMETROS NECESITAMOS MOUNTED
mounted(){
console.log("Param: "+ this.$route.params.numero);
let numero=this.$route.params.numero;
this.doble=parseInt(this.$route.params.numero);
if(numero == ""){
    console.log("SIN PARÁMETROS")
}else{
    this.mensaje=numero
    this.doble= this.doble*2
}
},
//TENEMOS UNA NUEVA ZONA LLAMADA WATCH,LA ENCARGADA DE SUPERVISAR LOS CAMBIOS DE PARAMS
watch:{
    '$route.params.numero'(nextVal,oldVal){
        if(nextVal!=oldVal){
            this.mensaje="Esto ha cambiado:"+
        this.$route.params.numero;
        this.doble=parseInt(this.$route.params.numero)*2;
        console.log("Next: "+nextVal)
        console.log("Old: "+oldVal)
        }
    }
},
//para que nos lleve a home creamos un método
//ROUTE CAPTURAR PARAMETROS Y ROUTER PARA QUE ME LLEVE A OTRA DIRECCION
methods:{
    redirecToHome(){
        this.$router.push("/")
    }
}

}
</script>

<style>

</style>