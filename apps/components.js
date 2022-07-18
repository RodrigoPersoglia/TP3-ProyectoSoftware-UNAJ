export const bienvenida = (tipo) => {
    return ` <div id="bienvenida" style="display: flex;flex-direction:column; align-items: center; margin-top:1.5rem">
    <p>Ingrese su dni para poder acceder a sus ${tipo}</p>
    <div class="vacio" style="height: 150px;width: 150px; background-image: url(https://www.svgrepo.com/show/273967/padlock-locked.svg) ;background-size:cover; align-items: center;"></div>
  </div>`
}


export const Card = (titulo, autor,isbn,editorial,edision,stock,url) => {
    return `<article class="Libro" onclick="location.href='./libro.html?titulo=${titulo}&isbn=${isbn}'">
        <div class="Titulo"> <h2>${Recortar(titulo)}</h2></div>
        <div class="LibroDetalle">
            <div class="PortadaLibro" style="background-image: url(${url});">
            </div>
        <div class=" DescripcionLibro">
            <span>AUTOR: </span>
            <p>${autor}</p>
            <span>ISBN: </span>
            <P>N° ${isbn}</P>
            <span>EDITORIAL: </span>
            <P>${editorial}</P>
            <span>EDISION: </span>
            <P>${edision}</P>
            <P><span>STOCK: </span>${stock}</P>
        </div>
        </div>
    </article>`
}

export const Card5 = (titulo, autor,isbn,editorial,edision,stock,url) => {
    return `<article class="Libro" onclick="location.href='./libro.html?titulo=${titulo}&isbn=${isbn}'">
        <div class="Titulo"> <h2>${titulo}</h2></div>
        <div class="LibroDetalle">
            <div class="PortadaLibro" style="background-image: url(${url});">
            </div>
        <div class=" DescripcionLibro">
            <span>AUTOR: </span>
            <p>${autor}</p>
            <span>ISBN: </span>
            <P>N° ${isbn}</P>
            <span>EDITORIAL: </span>
            <P>${editorial}</P>
            <span>EDISION: </span>
            <P>${edision}</P>
            <P><span>STOCK: </span>${stock}</P>
        </div>
        </div>
    </article>`
}

export const Card2 = (titulo, autor,isbn,editorial,edision,url,reserva) => {
    return `<article class="Libro">
    <div class="Titulo"> <h2>${Recortar(titulo)}</h2></div>
    <div class="LibroDetalle">
        <div class="PortadaLibro" style="background-image: url(${url});">
        </div>
    <div class=" DescripcionLibro">
        <span>AUTOR: </span>
        <p>${autor}</p>
        <span>ISBN: </span>
        <P>N° ${isbn}</P>
        <span>EDITORIAL: </span>
        <P>${editorial}</P>
        <span>EDISION: </span>
        <P>${edision}</P>
        <span>RESERVA: </span>
        <P>${reserva}</P>
        <button type="button" class="botones"  id="${isbn}" data-bs-toggle="modal" data-bs-target="#exampleModal">Alquilar</button>
    </div>
    </div>
</article>`
}

export const Card3 = (titulo, autor,isbn,editorial,edision,url,alquiler,devolucion) => {

    return `<article class="Libro">
    <div class="Titulo"> <h2>${Recortar(titulo)}</h2></div>
    <div class="LibroDetalle">
        <div class="PortadaLibro" style="background-image: url(${url});">
        </div>
    <div class=" DescripcionLibro">
        <span>AUTOR: </span>
        <p>${autor}</p>
        <span>ISBN: </span>
        <P>N° ${isbn}</P>
        <span>EDITORIAL: </span>
        <P>${editorial}</P>
        <P><span>EDISION: </span>${edision}</P>
        <span>ALQUILER: </span>
        <P>${alquiler}</P>
        <span>DEVOLUCION: </span>
        <P>${devolucion}</P>
    </div>
    </div>
</article>`
}

export const Card4 = (titulo,isbn,url) => {
    return `
    <article class="PortadaLibro" style="background-image: url(${url});" onclick="location.href='./libro.html?titulo=${titulo}&isbn=${isbn}'">
    </article>`
}

export const Card6 = (titulo,isbn,url) => {
    return `<p>Artículos Relacionados</p>
    <article class="PortadaLibro" style="background-image: url(${url});" onclick="location.href='./libro.html?titulo=${titulo}&isbn=${isbn}'">
    </article>`
}


export const NavMenu = () => {
    return `    <header id="header">
    <nav class="MiMenu">
        <ul>
            <li id="Logo">Biblioteca Municipal 9 de Julio</li>
            <li id="item1"><a href="./index.html">Home</a></li>
            <li id="item2"><a href="./listado.html">Libros</a></li>
            <li id="item3"><a href="./alquileres.html">Alquileres</a></li>
            <li id="item4"><a href="./reservas.html">Reservas</a></li>
            <li id="item5"> <a href="./quienes_somos.html">Quienes Somos</a></li>

            <div class="search">
                    <input type="text"
                        placeholder="Titulo del libro"
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

        <div class="varios">

        <div id="Informacion">
        <h2>Información General</h2>
        <a href="#">Acerca de Nosotros</a> 
        <a href="#">Nuestra Colección</a> 
        <a href="#">Eventos</a> 
        <a href="#">Guia de Lectura</a> 
        </div>

        <div id="Coleccion">
        <h2>Colección</h2>
        <a href="#">Autores</a> 
        <a href="#">Libros</a> 
        <a href="#">Géneros</a> 
        <a href="#">Política de alquiler</a> 
        </div>

        <div id="comunicacion">
        <h2>Contacto</h2>
        <a href="#">0800-333-LIBROS</a> 
        <a href="#">San Martin 1100 - 9 de Julio</a> 
        <a href="#">Mapa</a> 
        <a href="#">Trabaja con Nosotros</a> 
        </div>
        </div>

        <div id="Redes">
        <a style="text-decoration: none; color: white;"   target="_blank" href="mailto:rodrigo.persoglia@gmail.com?Subject=Mensaje desde el sitio Web"> <img   style="width: auto; height: 20px;" src="https://www.svgrepo.com/show/353812/google-gmail.svg" alt="" margin-left="1rem">   Comunicate por e-mail</a> 
        <a style="text-decoration: none; color: white ;"  target="_blank" href="https://api.whatsapp.com/send?phone=+5491141709324&text=Mensaje desde el sitio Web"> <img  style="width: auto; height: 20px;" src="https://www.svgrepo.com/show/138928/whatsapp.svg" alt="">   Comunicate por Whatsapp</a> 
        <a style="text-decoration: none; color: white;"  target="_blank" href="#"> <img   style="width: auto; height: 20px;" src="https://www.svgrepo.com/show/157818/facebook.svg" alt="" >   Seguinos en Facebook</a> 
        <a style="text-decoration: none; color: white;"  target="_blank" href="#"> <img   style="width: auto; height: 20px; " src="https://www.svgrepo.com/show/111199/instagram.svg" alt="">   Seguinos en Instagram</a>
        </div>
        <div id="Autor">
        <p>Sitio Web desarrollado por Rodrigo Persoglia</p>
        </div>
    </footer>`
}


const Recortar = (palabra) => {
    if(palabra.length>25){
        return palabra.substring(0,22)+'...';
    }
    return palabra
}

export const botonRedireccion = (redireccion,dni) => {
    return`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="window.location.href='./${redireccion}.html?dni=${dni}';">Ir a ${redireccion}</button>`
}



export const urlApi= 'https://localhost:7032/api/';;