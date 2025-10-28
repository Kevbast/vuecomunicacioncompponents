<template>
    <h2 style="color: red;">{{comic.titulo}}</h2>
    <p>{{ comic.descripcion }}</p>
    <!-- hay que hacer binding para recuperar la imagen -->
    <img :src="comic.imagen"/>
    <!-- AQUI YA USAMOS LAS DIRECTIVAS DE ESTILOS CON UNA CLASE DEPENDIENDO LA CONDICIÓN -->
    <h4 :class="{
        rojo:comic.year <=2000,
        verde:comic.year >2000
    }"
    
    >Year:{{ comic.year }}</h4>
    <button @click="seleccionaFavorito">Seleccionar fav</button>
    <button @click="deleteComic" style="background-color: red; color: aliceblue;">Delete COMIC</button>

</template>

<script>
export default {
name:"ComicComponent",
props:["comic","index"],
data(){
    return{

    }
},methods:{
    seleccionaFavorito(){
    console.log("Soy el hijo"+ this.comic);
    //LLAMAMOS AL MÉTODO DEL PADRE
    this.$emit("seleccionarFavoritoParent",this.comic)
  },deleteComic(){
    this.$emit("deleteComicPadre",this.index);
  }
}
}
</script>

<style>
@import "./../assets/css/comics.css";

</style>