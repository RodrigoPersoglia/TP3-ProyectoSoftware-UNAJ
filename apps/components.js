export const Info = (titulo, autor, año) => {
    return `<div class="pelicula">
    <label>Titulo:</label>
    <input type="text" value="${titulo}"/>
    <label>Autor:</label>
    <input type="text" value="${autor}"/>
    <label>Año:</label>
    <input type="text" value="${año}"/>
</div>`
}

export const Titulo = (text) => {
    return `<h2 class="Titulo">${text}</h2>`
}

export const Target = (titulo, autor,isbn,editorial,edision,stock,url) => {

    return `<article class="Libro">
        <a href="http://www.google.com.ar">
            <div class="PortadaLibro" style="background-image: url(${url});">
            </div>
        </a>
        <div class=" DescripcionLibro">
            <h2>${titulo}</h2>
            <h2>${autor}</h2>
            <P><span>ISBN: </span>N° ${isbn}</P>
            <P><span>EDITORIAL: </span>${editorial}</P>
            <P><span>EDISION: </span>${edision}</P>
            <P><span>STOCK: </span>${stock}</P>
        </div>
    </article>`
}