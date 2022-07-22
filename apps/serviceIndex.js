import {NavMenu,Footer,Card4,urlApi,Autores} from './components.js';
import {redireccion} from './redirecciones.js'




const header = document.getElementById("header");
const contacto = document.getElementById("Contacto");
const libros = document.getElementById("Libros");
const AutoresConteiner = document.getElementById("Autores-Conteiner");
const busqueda = document.getElementById("BuscarInput");

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    document.getElementById("searchButton").onclick = redireccionar;
    search();
    document.getElementById("item1").style.borderBottom="2px solid #007bff";
    cargarAutores();
}

const redireccionar = () => {
    redireccion();
}

const cargarAutores = () => {
    AutoresConteiner.innerHTML +=Autores("borges","Jorge Luis Borges")
    AutoresConteiner.innerHTML +=Autores("cortazar","Julio Cortazar")
    AutoresConteiner.innerHTML +=Autores("casares","Adolfo Bioy Casares")
    AutoresConteiner.innerHTML +=Autores("neruda","Pablo Neruda")
    AutoresConteiner.innerHTML +=Autores("sabato","Ernesto Sábato")

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

