import {NavMenu,Footer,Card3,bienvenida} from './components.js'
import {redireccion} from './redirecciones.js'

const header = document.getElementById("header");
const principal = document.getElementById("main");
const contacto = document.getElementById("Contacto");
const busquedaReservas = document.getElementById("buscarReservas");
const mensaje2 = document.getElementById("mensaje2");


window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    let user = getQueryParams().dni;
    if(user!=undefined){dni.value=user}
    document.getElementById("searchButton").onclick = redireccionar;
    busquedaReservas.onclick = search;
    document.getElementById("item3").style.borderBottom="2px solid #007bff"
    search2();
}

const search = () => {
    principal.innerHTML =null;
  if(dni.value!=""){
      let count = 0;
      var url = `https://localhost:7032/api/alquiler/cliente/${dni.value}?estado=2`;
      fetch(url)
      .then(response =>{
        if(response.ok){
          response.json()
          .then(data => {
            data.forEach(e => {
              count++;
                principal.innerHTML+=Card3(e.libro.titulo.toUpperCase(), e.libro.autor,e.libro.isbn,e.libro.editorial,e.libro.edicion,e.libro.imagen,new Date(e.fechaReserva).toLocaleDateString(),new Date(e.fechaAlquiler).toLocaleDateString())
                });Modal2('Tiene '+count+' alquileres registrados');
                if(count===0){Modal2('No hay alquileres del cliente ingresado');Bienvenida()}
            });
        }
        else{
          response.json() .then(data => {Modal2(data.mensaje);Bienvenida()})
        }
      })
  }
    else{Modal2("No ingreso ningun dni");Bienvenida()}
}

const search2 = () => {
    principal.innerHTML =null;
    if(dni.value!=""){
        let count = 0;
        var url = `https://localhost:7032/api/alquiler/cliente/${dni.value}?estado=2`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
        data.forEach(e => {
            count++;
            principal.innerHTML+=Card3(e.libro.titulo, e.libro.autor,e.libro.isbn,e.libro.editorial,e.libro.edicion,e.libro.imagen,new Date(e.fechaAlquiler).toLocaleDateString(),new Date(e.fechaDevolucion).toLocaleDateString())
            });
            if(count===0){Modal2('No hay alquileres del cliente ingresado');Bienvenida()} 
      });

    }
    else{Bienvenida()}
}


const redireccionar = () => {
    redireccion();
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
  }

  const Bienvenida  = () =>{
    principal.innerHTML +=bienvenida('alquileres')
  }

  const Modal2 = (texto) => {
    mensaje2.innerHTML=null;
    mensaje2.innerHTML=texto;
  }