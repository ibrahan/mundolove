const slider = document.querySelector(".slider");
const pais = document.querySelectorAll(".pais");
const opciones = document.querySelector(".opciones");
const imgPais = document.querySelectorAll(".imgPais");
const sImagenes = document.querySelector(".sImagenes");
const pNPais = document.querySelectorAll(".pNPais");
const efectS = document.querySelector(".efectS");

var numero = 0, nImagenesSelect, contador, contadorCol;
var imagenes = [], nImagenes = [];

//Obteniendo nombres de las imagenes
imgPais.forEach((valor, i) => {
  var index = valor.src.indexOf('imgs/');
  var index2 = valor.src.length;
  var valorAIntroducir = valor.src.substring(index, index2);

  var valorImagen = valor.src.substring(index+5, index2);
  imagenes.push(valorAIntroducir);
  nImagenes.push(valorImagen);
});

//Introduciendo imagenes en el slider
var paisZI = -1-pais.length;

while (numero < pais.length) {
  if (numero < 5 ) {
    imgPais[numero].setAttribute("paisARecoger", nImagenes[numero]);
    imgPais[numero].setAttribute("id", pNPais[numero].innerHTML);
    sImagenes.innerHTML += "<li class='aMover' style='z-index: "+ paisZI +";'><img src='"+ imagenes[numero] +"'></li>";
    paisZI--;
    opciones.innerHTML += "<li id='btnSlider' class='icon-circle'><li>";
  }
  numero++;
}

const imgsAMover = document.querySelectorAll(".aMover");
const btnSlider = document.querySelectorAll("#btnSlider");

//Botones del slider
btnSlider.forEach((btnS, pos) => {
  btnS.addEventListener("click", (e) => {
    contador = pos;
    resetarTodosLosColores();
    imgsAMover[pos].style.opacity = '1';
    btnSlider[pos].style.color = "#a3a833";
  });
});

//Reseteo general de las images y contenidos del slider
function resetarTodosLosColores() {
  contadorCol = 0;
  while (contadorCol < imgsAMover.length) {
    imgsAMover[contadorCol].style.transition = 'all 1s ease-out';
    btnSlider[contadorCol].style.color = "#000";
    imgsAMover[contadorCol].style.opacity = '0';
    contadorCol++;
  }
}

//Reseteo del contador que maneja la posicion del slider
function resetearContador() {
  contador = 0;
  btnSlider[contador].style.color = "#a3a833";
}

resetearContador();

//Slider imagenes
setInterval(function(){
  if (contador < imgsAMover.length) {
    imgsAMover[contador].style.transition = 'all 1s ease-out';
    imgsAMover[contador].style.opacity = '0';
    btnSlider[contador].style.color = "#000";
    contador++;
    if (contador == imgsAMover.length) {
      resetearContador();
    }
    btnSlider[contador].style.color = "#a3a833";
    imgsAMover[contador].style.opacity = '1';
  }
}, 5000);
