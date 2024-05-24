// const btn = document.querySelector("#obtener-datos");

// btn.addEventListener("click", () => {
//   const input = document.querySelector("#miInput");
//   const nombre = input.value;
//   console.log(nombre);
// });
const main = document.querySelector("main");
const form = document.querySelector("#form-example1");
const formEnviado = document.querySelector("#mensaje-exito");
const errSection = document.querySelector("#errores");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let errores = [];
  const nombre = document.querySelector("#input-name").value;
  const email = document.querySelector("#input-email").value;
  errSection.innerHTML = "";
  if (nombre.length < 3) {
    errores.push(
      "<p style='color:red;'>El nombre debe contener mínimo 3 caracteres</p>"
    );
  }
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!emailRegex.test(email)) {
    errores.push("<p style='color:red;'>Mail no válido</p>");
  }
  console.log(errores);
  if (errores.length > 0) {
    errores.forEach((error) => {
      errSection.innerHTML += error;
    });
  } else {
    formEnviado.innerHTML += `
      <h3>Bienvenido, ${nombre}!</h3>
      <h4>Email: ${email}</h4>
    `;
  }
});

const selectForm = document.querySelector("#form-example2");

selectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const select = document.querySelector("#select-example");
  const nombre = select.value;
  console.log(nombre);
  if (nombre === "") {
    main.innerHTML += "<p style='color:red;'>Debe seleccionar un nombre</p>";
  } else {
    main.innerHTML += `<p>Bienvenido, ${nombre}</p>`;
  }
});

const radioForm = document.querySelector("#form-example3");

radioForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputRadio = document.querySelector("input[name=check-name]:checked");
  console.log(inputRadio);
  //   const nombre = inputRadio?.value; // Se puede hacer así
  if (inputRadio) {
    const nombre = inputRadio.value; //O colocarlo dentro del if
    main.innerHTML += `<h3>Bienvenido, ${nombre}</h3>`;
  } else {
    main.innerHTML += "<p style='color:red;'>Debe seleccionar un nombre</p>";
  }
});
