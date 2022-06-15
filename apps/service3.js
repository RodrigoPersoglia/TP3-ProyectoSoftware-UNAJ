import {Info, Titulo,Target,NavMenu,Footer} from './components.js'
import {GetPeliculas} from './repository.js'

const header = document.getElementById("header");
const contacto = document.getElementById("Contacto");
window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
}
