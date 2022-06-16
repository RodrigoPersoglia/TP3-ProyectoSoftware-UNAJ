import {NavMenu,Footer,redireccion} from './components.js'

const header = document.getElementById("header");
const contacto = document.getElementById("Contacto");
const busqueda = document.getElementById("BuscarInput");
const reservarButton = document.getElementById("reservar");
const alquilarButton = document.getElementById("alquilar");




window.onload = () => {
    header.innerHTML=NavMenu();
    // document.getElementById("searchButton").onclick = search;
    reservarButton.onclick = reservar;
    alquilarButton.onclick = alquilar;
    document.getElementById("searchButton").onclick = redireccionar;
}



const reservar = () => {
    window.alert("Reservado");
}

const alquilar = () => {
    window.alert("Alquilado");
}
const redireccionar = () => {
    redireccion();
}