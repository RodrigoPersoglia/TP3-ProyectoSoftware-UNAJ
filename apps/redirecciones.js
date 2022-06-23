export const redireccion = () => {
    var win = window.open(`./listado.html?libro=${document.getElementById("BuscarInput").value}`,'_self');
}

export const redireccionReservas = (dni) => {
    var win = window.open(`./reservas.html?dni=${dni}`,'_self');
}

export const redireccionAlquileres = (dni) => {
    var win = window.open(`./alquileres.html?dni=${dni}`,'_self');
}


