import {Target,NavMenu,redireccion} from './components.js'

const busqueda = document.getElementById("buscarAutor");
const principal = document.getElementById("Productos");
const busqueda3 = document.getElementById("buscarText");
const header = document.getElementById("header");
const contacto = document.getElementById("Contacto");



window.onload = () => {
    document.getElementById("buscarButton").onclick = search;
    document.getElementById("busquedaAvanzada").onclick = BusquedaAvanzada;
    var libro = getQueryParams().libro
    search2(libro)
    if (libro!=undefined){busqueda3.setAttribute('value',getQueryParams().libro);}
    header.innerHTML=NavMenu();
    document.getElementById("searchButton").onclick = redireccionar;
}

function getQueryParams() {
    var urlParams;
    var match,
        pl     = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);
  
    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
       return urlParams;
};



const search = () => {
    principal.innerHTML =null;
    var url = `https://localhost:7032/api/libros?stock=true&nombre=${busqueda.value}&titulo=${busqueda3.value}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        principal.innerHTML +=Target(e.titulo, e.autor,e.isbn,e.editorial,e.edicion,e.stock,e.imagen)
        });
  });
}

const search2 = (titulo) => {
    principal.innerHTML =null;
    var url = `https://localhost:7032/api/libros?stock=true&titulo=${titulo}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        principal.innerHTML +=Target(e.titulo, e.autor,e.isbn,e.editorial,e.edicion,e.stock,e.imagen)
        principal.innerHTML +=NavMenu()
        });
  });

}



const redireccionar = () => {
    redireccion();
}


const BusquedaAvanzada = () => {
    if(busqueda.style.display !== "inline-block"){
        busqueda.value=null;
        busqueda.style.display = "inline-block";
        document.getElementById("busquedaAvanzada").innerHTML="Busqueda simple &#8593";
    }

    else{
        busqueda.value=null;
        busqueda.style.display = "none";
        document.getElementById("busquedaAvanzada").innerHTML="Busqueda avanzada &#8595";

    }   
}