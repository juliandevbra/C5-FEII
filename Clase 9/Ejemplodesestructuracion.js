const objetoInformacion = {
  nombre: "Miguel",
  password: "contra123",
  telefono: "0123456789",
  hobbies: {
    hob1: "Futbol",
    hob2: "Basquet",
  },
  nacionalidad: "",
};
const user = {
  email: "esteban@gmail.com",
  idioma: "español",
};
//   const {nombre, password, telefono} = objetoInformacion
//   console.log(nombre, password, telefono)

function validarInformacion(
  { nombre, password, telefono, hobbies },
  { email, idioma }
) {
  const { hob1, hob2 } = hobbies;
  console.log(email, idioma);
}
validarInformacion(objetoInformacion, user);
