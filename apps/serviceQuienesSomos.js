import {NavMenu,Footer} from './components.js'
import {redireccion} from './redirecciones.js'

const header = document.getElementById("header");
const contacto = document.getElementById("Contacto");
const busqueda = document.getElementById("BuscarInput");

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    document.getElementById("searchButton").onclick = redireccionar;
}

const redireccionar = () => {
    redireccion();
}
