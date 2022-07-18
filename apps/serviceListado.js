import {Card,NavMenu,Footer,urlApi} from './components.js'
import {redireccion} from './redirecciones.js'

const header = document.getElementById("header");
const principal = document.getElementById("Productos");
const contacto = document.getElementById("Contacto");
const busqueda = document.getElementById("buscarAutor");
const busqueda3 = document.getElementById("buscarText");
let titulo='';
let autor='';



window.onload = () => {
    document.getElementById("buscarButton").onclick = search;
    document.getElementById("busquedaAvanzada").onclick = BusquedaAvanzada;
    let parametros = getQueryParams()
    if (parametros.libro!=undefined){busqueda3.setAttribute('value',parametros.libro);titulo=parametros.libro}
    if (parametros.autor!=undefined){autor=parametros.autor}
    search2(titulo)
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    document.getElementById("searchButton").onclick = redireccionar;
    document.getElementById("item2").style.borderBottom="2px solid #007bff"
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
    var url = `${urlApi}libros?stock=true&nombre=${busqueda.value}&titulo=${busqueda3.value}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.length==0){principal.innerHTML +='No se encontraron resultados que coincidan con la busqueda.';}
    data.forEach(e => {
        principal.innerHTML +=Card(e.titulo.toUpperCase(), e.autor.toUpperCase(),e.isbn,e.editorial,e.edicion,e.stock,e.imagen)
        });
    });
}

const search2 = (titulo) => {
    principal.innerHTML =null;
    var url = `${urlApi}libros?stock=true&nombre=${autor}&titulo=${titulo}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.length==0){principal.innerHTML +='No se encontraron resultados que coincidan con la busqueda.';}
    data.forEach(e => {
        principal.innerHTML +=Card(e.titulo.toUpperCase(), e.autor.toUpperCase(),e.isbn,e.editorial,e.edicion,e.stock,e.imagen)
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
        document.getElementById("busquedaAvanzada").innerHTML="menos filtros &#8593";
    }
    else{
        busqueda.value=null;
        busqueda.style.display = "none";
        document.getElementById("busquedaAvanzada").innerHTML="mas flitros &#8595";

    }   
}
