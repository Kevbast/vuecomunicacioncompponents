<template>
  <h1>TABLA DE MULTIPLICAR</h1>
    <table border="1">
        <thead>
            <tr>
                <th>Multiplicación: Resultado:</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="numero in numeros" :key="numero">
                <td>{{ numero }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
export default {
name:"TablaMultiplicar",
data(){
    return{
        num:0,
        numeros:[]
    }
},
methods:{
    generarTabla(){
        this.num=parseInt(this.$route.params.numero);
    this.numeros=[]
            let aux=[];
            let n= this.num;
            for(let i=1;i<=10;i++){
                let mult=n*i;
                var resultado=n+"x"+i +"="+ mult;
                aux.push(resultado);
            }
            this.numeros=aux;
    }
},
mounted(){
    console.log("Param: "+ this.$route.params.numero);
    this.generarTabla();

},

watch:{
    '$route.params.numero'(nextVal,oldVal){
        if(nextVal!=oldVal){
            console.log("next:"+nextVal)
            console.log("oldVal:"+oldVal)
            this.generarTabla();
        }
    }
}

}
</script>

<style>

</style>