<template>
    <nav class="menu">
        <div class="menu-inner">
            <div class="brand">Mi App</div>
            <ul id="menu" class="menu-list">
                <li><router-link to="/">HelloWorld</router-link></li>
                <li><router-link to="/padreDeportes">PadreDeportes</router-link></li>
                <li><router-link to="/padreNumeros">PadreNumeros</router-link></li>
                <li><router-link to="/padreComics">Comics</router-link></li>
                <li><router-link to="/selectmulti">Selección múltiple</router-link></li>
                <li><router-link to="/sumacheckbox">Checkboxs</router-link></li>
                <li><router-link to="/numeroDoble">Numero Doble</router-link></li>
                
                <li v-for="num in numeros" :key="num">
                    <!-- AQUI YA APLICAMOS LA LÓGICA al usar :to ,tener cuidado con los espacios-->
                <router-link :to="'/numeroDoble/'+ num">Numero Doble {{ num }}</router-link>
                </li>

                <li v-for="num in numeros" :key="num">
                    <!-- AQUI YA APLICAMOS LA LÓGICA al usar :to ,tener cuidado con los espacios-->
                <router-link :to="'/tablamultiplicar/'+ num">Tabla del {{ num }}</router-link>
                </li>


            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "MenuComponent",
    data(){
        return{
            numeros:[77,666,936],

        }
    }
};
</script>

<style scoped>
:root {
    --menu-bg: #ffffff;
    --menu-accent: #6c5ce7; /* slate/purple */
    --menu-text: #2d3436;
    --menu-muted: #636e72;
}
.menu {
    background: linear-gradient(90deg, rgba(108,92,231,0.06), rgba(108,92,231,0.02));
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 8px rgba(16,24,40,0.04);
    border-radius: 8px;
}
.menu-inner {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
}
.brand {
    font-weight: 700;
    color: var(--menu-accent);
    margin-right: 0.5rem;
}
.menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}
.menu-list li {
    margin: 0;
}
.menu-list a {
    display: inline-block;
    padding: 0.45rem 0.9rem;
    color: var(--menu-text);
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    transition: background-color 0.18s ease, transform 0.12s ease, color 0.12s ease;
}
.menu-list a:hover {
    background: rgba(108,92,231,0.08);
    color: var(--menu-accent);
    transform: translateY(-2px);
}
.menu-list a.router-link-active {
    background: linear-gradient(90deg, rgba(108,92,231,0.18), rgba(108,92,231,0.08));
    color: white;
    color: #fff;
    box-shadow: 0 4px 12px rgba(108,92,231,0.12);
}

/* Responsive: en pantallas pequeñas, ordenar verticalmente */
@media (max-width: 560px) {
    .menu-inner {
        flex-direction: column;
        align-items: stretch;
    }
    .menu-list {
        flex-direction: column;
    }
    .menu-list a {
        width: 100%;
    }
}
</style>