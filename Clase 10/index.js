const queryParams = new URLSearchParams(location.search);
const form = document.getElementById("miFormulario");
const errUl = document.getElementById("errores");
const infoUsuario = document.getElementById("info-usuario");

//Verifico si existe user lo redirecciona a usuario.html
const user = localStorage.getItem("user");
if (user) {
  location.href = "usuario.html";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let errores = [];
  errUl.innerHTML = "";
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const edad = document.getElementById("edad");
  const pais = document.getElementById("pais");
  const pref1 = document.getElementById("preferencia1");
  const pref2 = document.getElementById("preferencia2");
  const tipoUsuario = document.querySelector("input[name=tipoUsuario]:checked");

  const user = {
    nombre: nombre.value,
    email: email.value,
    edad: edad.value,
    pais: pais.value,
    pref1: pref1.checked,
    pref2: pref2.checked,
    tipoUsuario: tipoUsuario ? tipoUsuario.value : null,
    // Otra forma -> tipoUsuario: tipoUsuario?.value
  };
  // Explicación de operador ternario
  // if(tipoUsuario === true) {
  //   user.tipoUsuario = tipoUsuario.value
  // } else {
  //   user.tipoUsuario = null
  // }

  if (user.nombre == "" || user.nombre.trim().length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres");
  }
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!emailRegex.test(user.email)) {
    errores.push("Mail no válido");
  }
  if (user.edad == "" || user.edad < 12) {
    errores.push("Debe colocar una edad válida");
  }
  if (user.pais == "") {
    errores.push("Debe seleccionar un país");
  }
  if (!user.pref1 && !user.pref2) {
    errores.push("Debe seleccionar al menos una prefencia");
  }
  if (!user.tipoUsuario) {
    errores.push("Debe seleccionar un tipo de usuario");
  }
  if (errores.length > 0) {
    console.log(errores);
    errores.forEach((error) => {
      errUl.innerHTML += `<li>${error}</li>`;
    });
  } else {
    //queryParams
    // for (let key in user) {
    //   queryParams.set(key, user[key]);
    // }
    // console.log(queryParams.toString());
    // setTimeout(() => {
    //   location.replace(`usuario.html?${queryParams.toString()}`);
    // }, 2000);

    //localStorage y sessionStorage

    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
      location.href = "usuario.html";
    }, 2000);
  }
});

// console.log(queryParams);
// const nombre = queryParams.get("nombre");
// const edad = queryParams.get("edad");
// const search = queryParams.get("search");
// console.log(nombre, edad, search);

//Se muestra user como una cadena de texto
infoUsuario.innerText = user;
