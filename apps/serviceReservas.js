import {NavMenu,Footer,Card2} from './components.js'
import {redireccion} from './redirecciones.js'


const header = document.getElementById("header");
const principal = document.getElementById("main");
const contacto = document.getElementById("Contacto");
const busquedaReservas = document.getElementById("buscarReservas");
var botones = document.querySelectorAll(".botones");
var dni = document.getElementById("dni");


window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    document.getElementById("searchButton").onclick = redireccionar;
    busquedaReservas.onclick = search;
}

const search = () => {
    principal.innerHTML =null;
    if(dni.value!=""){
        let count = 0;
        var url = `https://localhost:7032/api/alquiler/cliente/${dni.value}?estado=1`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          data.forEach(e => {
            count++;
              principal.innerHTML+=Card2(e.libro.titulo, e.libro.autor,e.libro.isbn,e.libro.editorial,e.libro.edicion,e.libro.imagen,new Date(e.fechaReserva).toLocaleDateString())
              });
              botones = null;
              botones = document.querySelectorAll(".botones");
              botones.forEach(boton => {
                  boton.addEventListener("click", cuandoSeHaceClick);
              });
              if(count===0){alert('No hay reservas del cliente ingresado')}
          });
    }
    else{alert("No ingreso ningun dni")}

}


const redireccionar = () => {
    redireccion();
}


const cuandoSeHaceClick = function (evento) {
    let Data ={
            clienteDNI: dni.value,
            isbn: this.id
          }
    fetch(`https://localhost:7032/api/alquiler`,{
        method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Data)
    })
    .then(response => response.json())
    .then(data => {window.alert(data.mensaje);location.reload();}  ).catch(error => console.log(error))
}
