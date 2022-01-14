const avion = document.querySelector(".avion");
const x = document.querySelector(".x");

function reiniciarTodo() {
  avion.style.bottom = "-70px";
  avion.style.left = "-70px";
  x.style.top = "75px";
  x.style.left = "70px";
  x.style.transform = "scale(0) rotateZ(360deg)";
}

function transiciones() {
  avion.style.transition = "all 1s ease-out";
  x.style.transition = "all 1s ease-out";
}

function quitarTransiciones() {
  avion.style.transition = "none";
  x.style.transition = "none";
}

function iniciarAnimacion() {
  transiciones();
  avion.style.bottom = "50px";
  avion.style.left = "35px";
  x.style.transform = "scale(1) rotateZ(0deg)";
}

function terminarAnimacion() {
  transiciones();
  avion.style.bottom = "150px";
  avion.style.left = "150px";
  x.style.transform = "scale(0) rotateZ(360deg)";
}

reiniciarTodo();
iniciarAnimacion();
setTimeout(function(){
  terminarAnimacion();
}, 4000);
setTimeout(function(){
  reiniciarTodo();
  quitarTransiciones();
}, 5000);

setInterval(function() {
  iniciarAnimacion();
  setTimeout(function(){
    terminarAnimacion();
  }, 4000);
  setTimeout(function(){
    reiniciarTodo();
    quitarTransiciones();
  }, 5000);
}, 6000);
