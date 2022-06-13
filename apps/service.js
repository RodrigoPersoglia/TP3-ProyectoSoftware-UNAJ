import {Info, Titulo,Target} from './components.js'
import {GetPeliculas} from './repository.js'

const busqueda = document.getElementById("buscarAutor");
const busqueda2 = document.getElementById("buscarStock");
const principal = document.getElementById("Productos");
const busqueda3 = document.getElementById("buscarText");



window.onload = () => {
    document.getElementById("buscarButton").onclick = search;
    document.getElementById("busquedaAvanzada").onclick = BusquedaAvanzada;
    var libro = getQueryParams().libro
    search2(libro)
    if (libro!=undefined){busqueda3.setAttribute('value',getQueryParams().libro);}
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
    var url = `https://localhost:7032/api/libros?nombre=${busqueda.value}&titulo=${busqueda3.value}`;
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
    var url = `https://localhost:7032/api/libros?titulo=${titulo}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        principal.innerHTML +=Target(e.titulo, e.autor,e.isbn,e.editorial,e.edicion,e.stock,e.imagen)
        });
  });
}

const BusquedaAvanzada = () => {
    if(busqueda.style.display !== "inline-block"){
        busqueda.style.display = "inline-block";
        busqueda2.style.display = "inline-block";
        document.getElementById("busquedaAvanzada").innerHTML="Busqueda simple &#8593";
    }

    else{
        busqueda.style.display = "none";
        busqueda2.style.display = "none";
        document.getElementById("busquedaAvanzada").innerHTML="Busqueda avanzada &#8595";

    }

    
}