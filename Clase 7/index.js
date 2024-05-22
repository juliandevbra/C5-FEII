// confirm y prompt
const main = document.getElementById("container");
let nombre = "";
let pic = ""; //https://vetsonparker.com.au/wp-content/uploads/2015/04/Rabbit-Facts.jpg

while (!nombre || nombre.length < 3) {
  nombre = prompt("Coloque su nombre:");
}

while (!pic || !pic.includes("http")) {
  pic = prompt("Coloque el enlace de foto de perfil");
}
let plantas = confirm("Te gusta las plantas?");

if (plantas) {
  main.style.backgroundImage =
    "url('https://ichef.bbci.co.uk/images/ic/1008xn/p07w02gy.jpg')";
}

//innerHTML, createElement, setAttribute y appendChild
main.innerHTML += `<h1>Bienvenido, ${nombre}</h1>`;
const img = document.createElement("img");
img.setAttribute("src", pic);
main.appendChild(img);
// main.innerHTML += `<img src=${pic} alt=${nombre}>`;

// estilos y eventos
const header = document.querySelector("header");
const themeBtn = document.querySelector("#theme");
const bgColors = ["#000000", "#f95959", "#680747", "#283739", "#680747"];

themeBtn.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random() * 5);
  console.log(randomColor);
  header.style.backgroundColor = bgColors[randomColor];
});

//keydown y keyup
document.addEventListener("keypress", (event) => {
  //   console.log(event);
  if (event.key === "v") {
    main.innerHTML =
      "<h3>Esta información está secretamente escondida y solamente vos pudiste encontrarla presionando la tecla indicada</h3>";
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "v") {
    main.innerText = "";
  }
});

//keypress y classList
const footer = document.querySelector("footer");
document.addEventListener("keypress", (event) => {
  if (event.key === "P" || event.key === "p") {
    // console.log(footer.classList.contains("hidden-footer"));
    // if (footer.classList.contains("hidden-footer")) {
    //   footer.classList.remove("hidden-footer");
    //   footer.classList.add("shown-footer");
    // } else {
    //   footer.classList.remove("shown-footer");
    //   footer.classList.add("hidden-footer");
    // }
    footer.classList.toggle("hidden-footer");
    footer.classList.toggle("shown-footer");
  }
});
