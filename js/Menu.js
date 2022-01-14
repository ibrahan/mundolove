const header = document.querySelector("header");

const reddImagen = document.querySelector(".reddImagen");

const pMenu = document.querySelector(".p-menu");
const pSubMenu = document.querySelector(".p-submenu");
const sSubMenu = document.querySelector(".s-submenu");

const btnOcultarMenu = document.querySelector(".btn-ocultarMenu");
const btnPresentarMenu = document.querySelector(".btn-presentarMenu");

var valorPantalla;

//Funciones y botones para ocultar y presentar menu:
function ocultarMenu() {
  header.style.transition = "all 0.5s ease-in";
  header.style.top = "-60px";

  btnPresentarMenu.style.transition = "all 0.5s ease-out";
  btnPresentarMenu.style.top = "0px";
}

function presentarMenu() {
  btnPresentarMenu.style.transition = "all 0.5s ease-in";
  btnPresentarMenu.style.top = "-60px";

  header.style.transition = "all 0.5s ease-out";
  header.style.top = "0px";
}

btnOcultarMenu.addEventListener("click", (e) => {
  ocultarMenu();
});

btnPresentarMenu.addEventListener("click", (e) => {
  presentarMenu();
});

//Para saber que ruta ir dependiendo del archivo:
reddImagen.addEventListener("click", (e) => {
  var rutaVentana = window.location.href;
  var rutaVentanaIndex = window.location.href.length;
  var aw = rutaVentana.indexOf("Alovely_World");

  var rutaVentanaDef = rutaVentana.substring(aw, rutaVentanaDef);

  if (rutaVentanaDef.includes('index.html')) {
    window.location.href = "index.html";
  } else {
    window.location.href = "../index.html";
  }
});

//Para cuando se baja y sube el Scroll de la pantalla
function actualizar() {
  valorPantalla = window.scrollY;
}

window.addEventListener("scroll", (e) => {
  if (valorPantalla > window.scrollY) {
    presentarMenu();
  } else {
    ocultarMenu();
  }
  actualizar();
});
