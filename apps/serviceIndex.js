import {NavMenu,Footer,Card4,urlApi} from './components.js';




const header = document.getElementById("header");
const contacto = document.getElementById("Contacto");
const libros = document.getElementById("Libros");

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    document.getElementById("searchButton").onclick = redireccionar;
    search();
    document.getElementById("item1").style.borderBottom="2px solid #007bff";
}

const redireccionar = () => {
    redireccion();
}


const search = () => {
    libros.innerHTML =null;
    var url = `${urlApi}libros?`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        libros.innerHTML +=Card4(e.titulo,e.isbn,e.imagen)
        });
    });

}

