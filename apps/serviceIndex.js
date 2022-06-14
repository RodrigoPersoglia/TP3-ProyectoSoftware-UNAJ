// import {Info, Titulo,Target} from './components.js'

const boton = document.getElementById("BuscarButton");
const busqueda = document.getElementById("Buscador");


window.onload = () => {
    document.getElementById("BuscarButton").onclick = search;
}

const search = () => {
    var win = window.open(`./Listado.html?libro=${busqueda.value}`,'_self');
    console.log('hola');
        // Cambiar el foco al nuevo tab (punto opcional)
        
    win.principal.innerHTML =null;
    const texto = win.getElementById(buscadores);
    console.log('hola');
    console.log(texto);
    win.close();
    var url = `https://localhost:7032/api/libros?nombre=titulo=${busqueda.value}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    data.forEach(e => {
        win.principal.innerHTML +=Target(e.titulo, e.autor,e.isbn,e.editorial,e.edicion,e.stock,e.imagen)
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