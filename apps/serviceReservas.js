import {NavMenu,Footer,Card2,botonRedireccion,bienvenida,urlApi} from './components.js'
import {redireccion} from './redirecciones.js'


const header = document.getElementById("header");
const principal = document.getElementById("main");
const contacto = document.getElementById("Contacto");
const busquedaReservas = document.getElementById("buscarReservas");
var botones = document.querySelectorAll(".botones");
var dni = document.getElementById("dni");
const ModalCustom = document.getElementById("mensaje");
const Modalfooter = document.getElementById("modal-footer");
const mensaje2 = document.getElementById("mensaje2");
const modalCustom2 = document.getElementById("exampleModal2");

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    let user = getQueryParams().dni;
    if(user!=undefined){dni.value=user}
    document.getElementById("searchButton").onclick = redireccionar;
    busquedaReservas.onclick = search;
    document.getElementById("item4").style.borderBottom="2px solid #007bff";
    search2();
}

const search = () => {
  principal.innerHTML =null;
  if(dni.value!=""){
      let count = 0;
      var url = `${urlApi}alquiler/cliente/${dni.value}?estado=1`;
      fetch(url)
      .then(response =>{
        if(response.ok){
          response.json()
          .then(data => {
            data.forEach(e => {
              count++;
                principal.innerHTML+=Card2(e.libro.titulo.toUpperCase(), e.libro.autor.toUpperCase(),e.libro.isbn,e.libro.editorial,e.libro.edicion,e.libro.imagen,new Date(e.fechaReserva).toLocaleDateString())
                });
                Modal2('Tiene '+count+' reservas activas')
                botones = null;
                botones = document.querySelectorAll(".botones");
                botones.forEach(boton => {
                    boton.addEventListener("click", cuandoSeHaceClick);
                });
                if(count===0){
                  Modal2('No hay reservas del cliente ingresado');Bienvenida()
                }
            }).catch(err => console.log('ERROR: ' + err));
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
      var url = `${urlApi}alquiler/cliente/${dni.value}?estado=1`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
        data.forEach(e => {
          count++;
            principal.innerHTML+=Card2(e.libro.titulo.toUpperCase(), e.libro.autor.toUpperCase(),e.libro.isbn,e.libro.editorial,e.libro.edicion,e.libro.imagen,new Date(e.fechaReserva).toLocaleDateString())
            });
            botones = null;
            botones = document.querySelectorAll(".botones");
            botones.forEach(boton => {
                boton.addEventListener("click", cuandoSeHaceClick);
            });
            if(count===0){Modal2('No hay reservas del cliente ingresado');Bienvenida()}
        }).catch(err => console.log('ERROR: ' + err));
  }
  else{Bienvenida()}
}

const Bienvenida  = () =>{
  principal.innerHTML +=bienvenida('reservas')
}

const redireccionar = () => {
    redireccion();
}


const cuandoSeHaceClick = function (evento) {
    let Data ={
            clienteDNI: dni.value,
            isbn: this.id
          }
    fetch(`${urlApi}alquiler`,{
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Data)
    })
    .then(response => response.json())
    .then(data => {Modal(data.mensaje,'alquileres',dni.value);}  ).catch(error => console.log(error))
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

const Modal = (texto,redireccion,dni) => {
  ModalCustom.innerHTML=null;
  ModalCustom.innerHTML=texto;
  Modalfooter.innerHTML+=botonRedireccion(redireccion,dni);
}

const Modal2 = (texto) => {
  mensaje2.innerHTML=null;
  mensaje2.innerHTML=texto;
}