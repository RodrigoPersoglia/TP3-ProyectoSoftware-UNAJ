import {NavMenu,Footer,redireccion} from './components.js'

const header = document.getElementById("header");
const busqueda = document.getElementById("BuscarInput");




window.onload = () => {
    header.innerHTML=NavMenu();
    document.getElementById("searchButton").onclick = redireccionar;
}



const redireccionar = () => {
    redireccion();
}
