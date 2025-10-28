<template>
    <div>
        <h1>SUMA CHECKBOXS</h1>
        <h2>Suma: {{ total }}</h2>

        <form @submit.prevent="generarCheckboxs">
            <button>Generar boton</button>

            <div v-for="(num, index) in ArrayNumbers" :key="index" class="fila-numero">
                <label :for="`chk-${index}`">Numero: {{ num }}</label>
                <!-- :value enlaza el número (no la cadena) y v-model recoge los seleccionados en un array -->
                <input :id="`chk-${index}`" type="checkbox" :value="num" v-model="checkedNumbers">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "SumaCheckBoxs",
    data() {
        return {
            ArrayNumbers: [11, 3, 4, 2, 32, 22],
            // array que contendrá los valores marcados
            checkedNumbers: []
        };
    },
    computed: {
        // suma los valores marcados. Number() por si vienen como string.
        total() {
            return this.checkedNumbers.reduce((acc, val) => acc + Number(val), 0);
        }
    },
    methods: {
        generarCheckboxs() {
            // añade un número aleatorio (entero) al array
            this.ArrayNumbers.push(Math.floor(Math.random() * 100) + 1);
        }
    }
};
</script>

<style scoped>
.fila-numero {
    margin: 0.25rem 0;
}
</style>