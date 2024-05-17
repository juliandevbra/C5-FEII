//Eventos
//Evento load
// window.addEventListener("load", () => {
//   console.log("Se cargó la página 3");
// });
// window.addEventListener("load", () => {
//   console.log("Se cargó la página 4");
// });
// window.onload = () => {
//   console.log("Se cargó la página 1");
// };
// window.onload = () => {
//   console.log("Se cargó la página 2");
// };
// window.onload = () => {
//   console.log("Se cargó la página 5");
// };
// console.log(window);

//mouseover y mouseout
window.addEventListener("load", () => {
  const div = document.getElementById("root");
  const contenedor = document.getElementById("contenedor");

  div.addEventListener("mouseover", function () {
    div.innerHTML = "Quita el mouse encima mio";
    contenedor.innerHTML =
      "<p>Elemento 1</p><p>Elemento 2</p><p>Elemento 3</p>";
  });
  div.addEventListener("mouseout", function () {
    div.innerHTML = "Reposa el mouse sobre mi";
    contenedor.innerHTML = "";
  });
});

//click, event y preventDefault
const aTag = document.querySelector("#anchor");

aTag.addEventListener("click", (event) => {
  console.log(event);
  event.preventDefault();
  const pregunta = confirm("Estas seguro que quiere salir del sitio?");
  if (pregunta) {
    open("https://playground.digitalhouse.com/login");
  }
});

//eventos de teclado
//keypress
const pTag = document.getElementById("keypress");

document.addEventListener("keypress", (event) => {
  console.log(event.key);
  pTag.innerText = "Presionaste la tecla " + event.key;
  if (event.key === "Enter") {
    console.log("Epa! apretaste enter!");
  }
});

//keydown y keyup
document.addEventListener("keydown", (event) => {
  console.log("Presionaste " + event.key);
});
document.addEventListener("keyup", (event) => {
  console.log("Soltaste " + event.key);
});

const contador = document.querySelector("#contador");
let cantSegundos = 0;
let intervalo;

document.addEventListener("keydown", (event) => {
  if (!intervalo) {
    intervalo = setInterval(() => {
      cantSegundos++;
      contador.innerText = `Tiempo: ${cantSegundos} segundos`;
    }, 1000);
  }
});
document.addEventListener("keyup", (event) => {
  clearInterval(intervalo);
  intervalo = null;
  cantSegundos = 0;
  contador.innerText = "Tiempo: 0 segundos";
});
