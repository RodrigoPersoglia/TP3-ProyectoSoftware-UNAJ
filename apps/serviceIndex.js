
import {NavMenu} from './components'

const boton = document.getElementById("BuscarButton");
const busqueda = document.getElementById("BuscarInput");
const header = document.getElementById("header")


window.onload = () => {
    boton.onclick = search;
    menu();

}

const search = () => {
    var win = window.open(`./Listado.html?libro=${busqueda.value}`,'_self');
}

const menu = () => {
    console.log(NavMenu())
    document.innerHTML+=NavMenu();
}
