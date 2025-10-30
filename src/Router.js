import { createRouter, createWebHistory } from "vue-router"; 
import SeleccionMultiple from "./components/SeleccionMultiple.vue";
import PadreDeportes from "./components/PadreDeportes.vue";
import HelloWorld from "./components/HelloWorld.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import SumaCheckbox from "./components/SumaCheckbox.vue";
import PadreNumeros from "./components/PadreNumeros.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRoutes=[
    {path:"/" ,component: HelloWorld},
    {path:"/padreDeportes" ,component: PadreDeportes},
    {path:"/padreNumeros" ,component: PadreNumeros},
    {path:"/padreComics" ,component: ComicsComponent},
    {path:"/selectmulti" ,component: SeleccionMultiple},
    {path:"/sumacheckbox" ,component: SumaCheckbox},
    {path:"/numeroDoble/:numero?" ,component: NumeroDoble},//PASAMOS EL PARÁMETRO CON RUTAS,OPCIONAL
    {path:"/tablamultiplicar/:numero" ,component: TablaMultiplicar},//esta vez obligatorio
]
const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router;
