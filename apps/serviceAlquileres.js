import {NavMenu,Footer,Card3} from './components.js'
import {redireccion} from './redirecciones.js'

const header = document.getElementById("header");
const principal = document.getElementById("main");
const contacto = document.getElementById("Contacto");
const busquedaReservas = document.getElementById("buscarReservas");


window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    document.getElementById("searchButton").onclick = redireccionar;
    busquedaReservas.onclick = search;
}

const search = () => {
    principal.innerHTML =null;
    var url = `https://localhost:7032/api/alquiler/cliente/${dni.value}?estado=2`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        principal.innerHTML+=Card3(e.libro.titulo, e.libro.autor,e.libro.isbn,e.libro.editorial,e.libro.edicion,e.libro.imagen,new Date(e.fechaAlquiler).toLocaleDateString(),new Date(e.fechaDevolucion).toLocaleDateString())
        });
  });
}


const redireccionar = () => {
    redireccion();
}
