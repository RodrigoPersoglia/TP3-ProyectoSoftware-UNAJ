import {NavMenu,Footer,Card5,Card6,botonRedireccion} from './components.js'
import {redireccion} from './redirecciones.js'

const header = document.getElementById("header");
const principal = document.getElementById("main");
const contacto = document.getElementById("Contacto");
const busqueda = document.getElementById("BuscarInput");
const reservarButton = document.getElementById("reservar");
const alquilarButton = document.getElementById("alquilar");
const dniInput = document.getElementById("dni");
const Relacionados = document.getElementById("relacionados");
const ModalCustom = document.getElementById("mensaje");
const Modalfooter = document.getElementById("modal-footer");
let libro;
let isbn;

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
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
    .then(response => {
        if(response.ok){Modal('Reserva confirmada','reservas',dniInput.value);}
        else{response.json().then(data => {Modal(data.mensaje,'reservas','')}).catch(error => console.log(error))}
    })    
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
    .then(response => {
        if(response.ok){ Modal('Alquiler confirmado','alquileres',dniInput.value); }
        else{response.json().then(data => {Modal(data.mensaje,'alquileres','')}).catch(error => console.log(error))}
    })    
}

const Modal = (texto,redireccion,dni) => {
    ModalCustom.innerHTML=null;
    ModalCustom.innerHTML=texto;
    Modalfooter.innerHTML+=botonRedireccion(redireccion,dni);
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
        principal.innerHTML +=Card5(e.titulo.toUpperCase(), e.autor,e.isbn,e.editorial,e.edicion,e.stock,e.imagen);
        search2(e.autor);
        });
    });
}

const search2 = (autor) => {
    Relacionados.innerHTML=null;
    var url = `https://localhost:7032/api/libros?nombre=${autor}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        if(e.isbn!=isbn){Relacionados.innerHTML +=Card6(e.titulo,e.isbn,e.imagen)}
        
        });
    });
}