import {NavMenu,Footer,redireccion,Target,redireccionReservas,redireccionAlquileres} from './components.js'

const header = document.getElementById("header");
const contacto = document.getElementById("Contacto");
const busqueda = document.getElementById("BuscarInput");
const reservarButton = document.getElementById("reservar");
const alquilarButton = document.getElementById("alquilar");
const principal = document.getElementById("main");
const dniInput = document.getElementById("dni");
let libro;
let isbn;



window.onload = () => {
    header.innerHTML=NavMenu();
    reservarButton.onclick = reservar;
    alquilarButton.onclick = alquilar;
    libro = getQueryParams().titulo
    isbn=getQueryParams().isbn
    search(libro)
    document.getElementById("searchButton").onclick = redireccionar;
}


const reservar = ()=> {
    let Data ={
        "clienteDNI": dniInput.value,
        "isbn": isbn,
        "fechaAlquiler": null,
        "fechaReserva": new Date().toISOString()
    }
fetch(`https://localhost:7032/api/alquiler`,{
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
})
.then(response => response.json())
.then(data => {window.alert(data.mensaje);search(libro);}).catch(error => console.log(error))

}



const alquilar = ()=> {

    let Data ={
        "clienteDNI": dniInput.value,
        "isbn": isbn,
        "fechaAlquiler": new Date().toISOString(),
        "fechaReserva": null
    }
fetch(`https://localhost:7032/api/alquiler`,{
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
})
.then(response => response.json())
.then(data => {window.alert(data.mensaje);search(libro);}).catch(error => console.log(error))
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
};


const search = (titulo) => {
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