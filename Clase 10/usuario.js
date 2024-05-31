const main = document.querySelector("main");
// queryParams
// const queryParams = new URLSearchParams(location.search);
// const nombre = queryParams.get("nombre");
// const edad = queryParams.get("edad");
// const email = queryParams.get("email");
// const pais = queryParams.get("pais");
// const tipoUsuario = queryParams.get("tipoUsuario");

// main.innerHTML = `
//     <h1>Datos de usuario</h1>
//     <p> Nombre: <span>${nombre}</span></p>
//     <p> Email: <span>${email}</span></p>
//     <p> Edad: <span>${edad}</span></p>
//     <p> Pais: <span>${pais}</span></p>
//     <p> Usuario: <span>${tipoUsuario}</span></p>
// `;

const user = JSON.parse(localStorage.getItem("user"));
//En caso de que user sea igual a null, lo redirecciona a index.html
if (!user) {
  location.href = "index.html";
} else {
  main.innerHTML = `
      <h1>Datos de usuario</h1>
      <p> Nombre: <span>${user.nombre}</span></p>
      <p> Email: <span>${user.email}</span></p>
      <p> Edad: <span>${user.edad}</span></p>
      <p> Pais: <span>${user.pais}</span></p>
      <p> Usuario: <span>${user.tipoUsuario}</span></p>
  `;
}

const btnLogout = document.getElementById("logout");
const btnDelete = document.getElementById("delete");

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("user");
  setTimeout(() => {
    location.href = "index.html";
  }, 2000);
});
btnDelete.addEventListener("click", () => {
  localStorage.clear();
  setTimeout(() => {
    location.href = "index.html";
  }, 2000);
});
