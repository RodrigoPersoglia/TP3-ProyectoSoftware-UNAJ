import {NavMenu,Footer} from './components.js'

const header = document.getElementById("header");
const contacto = document.getElementById("Contacto");
const busqueda = document.getElementById("BuscarInput");




window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    document.getElementById("searchButton").onclick = search;
}

const search = () => {
    console.log("entro a la funcion");
    var win = window.open(`./Listado.html?libro=${busqueda.value}`,'_self');
}


