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
        <a href="libro.html?titulo=${titulo}">
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

export const NavMenu = () => {

    return `    <header id="header">
    <nav class="menu">
        <ul>
            <li id="Logo">Biblioteca Nacional 9 de Julio</li>
            <li> <a href="#">Home</a></li>
            <li><a href="./Listado.html">Libros</a></li>
            <li><a href="./usuario.html?Alquileres">Alquileres</a></li>
            <li><a href="./usuario.html?Reservas">Reservas</a></li>
            <li> <a href="./quienes_somos.html">Quienes Somos</a></li>

            <div class="search">
                    <input type="text"
                        placeholder="  Busqueda"
                        id = "BuscarInput"
                        name="search">
                    <button id="searchButton">
                    </button>
            </div>

        </ul>
    </nav> 
</header> `
}

export const Footer = () => {

    return `<footer id="Contacto">
        <h2>Contacto</h2><br>
        <a style="text-decoration: none; color: white;"   target="_blank" href="mailto:rodrigo.persoglia@gmail.com?Subject=Mensaje desde el sitio Web"> <img   style="width: auto; height: 20px;" src="https://www.svgrepo.com/show/353812/google-gmail.svg" alt="" margin-left="1rem">   Comunicate por e-mail</a> <br><br>
        <a style="text-decoration: none; color: white ;"  target="_blank" href="https://api.whatsapp.com/send?phone=+5491141709324&text=Mensaje desde el sitio Web"> <img  style="width: auto; height: 20px;" src="https://www.svgrepo.com/show/28155/whatsapp.svg" alt="">   Comunicate por Whatsapp</a> <br><br>
        <a style="text-decoration: none; color: white;"  target="_blank" href="#"> <img   style="width: auto; height: 20px; background-color: white;" src="https://www.svgrepo.com/show/157818/facebook.svg" alt="" >   Seguinos en Facebook</a> <br><br>
        <a style="text-decoration: none; color: white;"  target="_blank" href="#"> <img   style="width: auto; height: 20px; background-color: white; border-radius: 6.5px;" src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg" alt="">   Seguinos en Instagram</a> <br><br>
    </footer>`
}