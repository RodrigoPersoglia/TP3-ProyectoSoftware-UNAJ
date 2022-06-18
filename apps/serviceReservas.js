import {NavMenu,Footer,redireccion,Target2} from './components.js'

const header = document.getElementById("header");
const busqueda = document.getElementById("BuscarInput");
const busquedaReservas = document.getElementById("buscarReservas");
const principal = document.getElementById("main");
var botones = document.querySelectorAll(".botones");
var dni = document.getElementById("dni");




window.onload = () => {
    header.innerHTML=NavMenu();
    document.getElementById("searchButton").onclick = redireccionar;
    busquedaReservas.onclick = search;
}

const search = () => {
    principal.innerHTML =null;
    var url = `https://localhost:7032/api/alquiler/cliente/${dni.value}?estado=1`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        principal.innerHTML+=Target2(e.libro.titulo, e.libro.autor,e.libro.isbn,e.libro.editorial,e.libro.edicion,e.libro.imagen,e.fechaReserva)
        });
        botones = null;
        botones = document.querySelectorAll(".botones");
        botones.forEach(boton => {
            boton.addEventListener("click", cuandoSeHaceClick);
        });
  });

}




const redireccionar = () => {
    redireccion();
}


const cuandoSeHaceClick = function (evento) {
    let Data ={
            clienteDNI: "34813823",
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
