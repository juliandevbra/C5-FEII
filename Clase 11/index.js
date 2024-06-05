// Ejemplo sencillo de como trabajar Promise
let x = true;
const promise = new Promise((resolve, reject) => {
  if (x) {
    resolve("Se ha cumplido la promesa");
  }
  reject("Error: No se ha podido cumplir la promesa");
});

promise
  .then((respuesta) => console.log(respuesta))
  .catch((err) => console.log(err));

// Otro ejemplo con promise

const myPromise = (exito) => {
  return new Promise((resolve, reject) => {
    if (exito) {
      resolve(["a", "b", "c", "d"]);
    } else {
      reject("No se pudo obtener el array");
    }
  });
};

myPromise(false)
  .then((respuesta) => console.log(respuesta))
  .catch((err) => console.log(err));

// Promise que devuelva un array de objetos
const main = document.querySelector("main");
const paises = [
  { nombre: "Argentina", capital: "Buenos Aires" },
  { nombre: "Bolivia", capital: "La Paz" },
  { nombre: "Brasil", capital: "Brasilia" },
  { nombre: "Chile", capital: "Santiago" },
  { nombre: "Colombia", capital: "Bogotá" },
  { nombre: "Ecuador", capital: "Quito" },
  { nombre: "Guyana", capital: "Georgetown" },
  { nombre: "Paraguay", capital: "Asunción" },
  { nombre: "Perú", capital: "Lima" },
  { nombre: "Surinam", capital: "Paramaribo" },
  { nombre: "Uruguay", capital: "Montevideo" },
  { nombre: "Venezuela", capital: "Caracas" },
];

const obtenerPaises = (exito) => {
  return new Promise((resolve, reject) => {
    if (exito) {
      setTimeout(() => {
        resolve(paises);
      }, 2000);
    } else {
      reject("Error al obtener paises");
    }
  });
};

// obtenerPaises(true)
//   .then((respuesta) => {
//     console.log(respuesta);
//     const ul = document.createElement("ul");
// respuesta.forEach((pais) => {
//   ul.innerHTML += `<li>País:${pais.nombre} - Capital: ${pais.capital}</li>`;
// });
//     main.appendChild(ul);
//   })
//   .catch((err) => console.log(err));

//Functión de obtenerPaises con async/await
async function fetchPaises() {
  let respuesta = await obtenerPaises(true);
  console.log(respuesta);
  const ul = document.createElement("ul");
  respuesta.forEach((pais) => {
    ul.innerHTML += `<li>País:${pais.nombre} - Capital: ${pais.capital}</li>`;
  });
  main.appendChild(ul);
}
fetchPaises();

// ejemplo con fetch
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
fetch(url)
  .then((respuesta) => {
    console.log(respuesta);
    if (respuesta.ok) {
      return respuesta.json();
    }
  })
  .then((data) => {
    if (data) {
      console.log(data);
      data.forEach((gatito) => {
        main.innerHTML += `<img src=${gatito.url} alt=${gatito.id} width='200'>`;
      });
    } else {
      console.log("Error al traer los gatitos");
    }
  })
  .catch((err) => console.log(err));
