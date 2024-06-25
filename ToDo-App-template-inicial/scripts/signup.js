window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const url = "https://todo-api.digitalhouse.com/v1/users";
  const form = document.querySelector("form");
  const email = document.getElementById("inputEmail");
  const pass = document.getElementById("inputPassword");
  const passRepeat = document.getElementById("inputPasswordRepetida");
  const nombre = document.getElementById("inputNombre");
  const apellido = document.getElementById("inputApellido");

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    mostrarSpinner();
    if (!validarTexto(nombre.value)) {
      Swal.fire({
        icon: "error",
        text: "Nombre debe tener al menos 3 caracteres",
      });
      return;
    }
    if (!validarTexto(apellido.value)) {
      Swal.fire({
        icon: "error",
        text: "Apellido debe tener al menos 3 caracteres",
      });
      return;
    }
    if (!validarEmail(email.value)) {
      Swal.fire({
        icon: "error",
        title: "Email no válido",
      });
      return;
    }
    if (!validarContrasenia(pass.value)) {
      Swal.fire({
        icon: "error",
        title: "La contraseña debe tener la menos 6 caracteres",
      });
      return;
    }
    if (!compararContrasenias(pass, passRepeat)) {
      Swal.fire({
        icon: "error",
        title: "Las contraseñas no coinciden",
      });
      return;
    }

    const body = {
      firstName: normalizarTexto(nombre.value),
      lastName: normalizarTexto(apellido.value),
      email: normalizarEmail(email.value),
      password: pass.value,
    };
    const settings = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };

    realizarRegister(settings);
  });

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarRegister(settings) {
    fetch(`${url}/users`, settings)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
        }
        console.log("Pudiste registrar");
        setTimeout(() => {
          ocultarSpinner();
          location.replace("./mis-tareas.html");
        }, 2000);
      })
      .catch((err) => console.log(err));
  }
});
