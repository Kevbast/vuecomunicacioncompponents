<template>
  <div>
    <h1 style="color: slateblue;">Selección múltiple</h1>

    <form @submit.prevent="mostrarSelect">
      <label>Seleccione varios elementos</label>
      <select size="10" multiple v-model="seleccionados">
        <option v-for="elemento in arrayElementos" :key="elemento" :value="elemento">
          {{ elemento }}
        </option>
      </select>

      <button type="submit">VER</button>
    </form>

    <div v-if="status" class="resultado">
      <h3>Seleccionados ({{ seleccionados.length }}):</h3>
      <ul>
        <li v-for="(item, idx) in seleccionados" :key="idx">{{ item }}</li>
      </ul>
    </div>

    <div v-else class="resultado">
      <p>No hay elementos seleccionados.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeleccionMultiple",
  data() {
    return {
      arrayElementos: ["elemento 1", "elemento 2", "elemento 3", "elemento 4"],
      seleccionados: [], // importante: array para multiple select
      status:null
    };
  },
  methods: {
    mostrarSelect() {
      // la lista ya está en this.seleccionados
      console.log("Elementos seleccionados:", this.seleccionados);
      this.status=1
      // ejemplo: emitir al padre
      // this.$emit('seleccion-cambiada', this.seleccionados)
      // o enviar a una API
    }
  }
};
</script>

<style scoped>
.resultado { margin-top: 1rem; }
</style>