window.addEventListener("load", () => {
  //   const url = "https://api.sampleapis.com/cartoons/cartoons2D";
  const url = "https://rickandmortyapi.com/api/character";
  const listSection = document.querySelector("#list-container");
  // Repasando método fetch() con .then()
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.length > 0) {
  //         data.forEach((item) => {
  //           listSection.innerHTML += `
  //               <div class='card'>
  //                   <h3>${item.title}</h3>
  //                   <img src=${item.image} alt=${item.title} width='200'>
  //               </div>
  //           `;
  //         });
  //       }
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => {
  //       const loader = document.querySelector(".loader");
  //       loader.remove();
  //     });

  //Mismo ejemplo que el anterior pero con async/await y try/catch
  //   const obtenerCartoon = async () => {
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       console.log(res);
  //       console.log(data);
  //       if (data.length > 0) {
  //         data.forEach((item) => {
  //           listSection.innerHTML += `
  //             <div class='card'>
  //                 <h3>${item.title}</h3>
  //                 <img src=${item.image} alt=${item.title} width='200'>
  //             </div>
  //         `;
  //         });
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       const loader = document.querySelector(".loader");
  //       loader.remove();
  //     }
  //   };
  //   obtenerCartoon();

  //Otro ejemplo con otra API y le sumamos Sweetalert
  const obtenerPersonajes = async () => {
    try {
      const res = await fetch(url);
      // const data = await res.json();
      // console.log(data);
      const { info, results } = await res.json();
      console.log(results);
      if (results) {
        const loader = document.querySelector(".loader");
        loader.remove();
        results.forEach((character) => {
          listSection.innerHTML += `
                  <div class='card'>
                      <h3>${character.name}</h3>
                      <img src=${character.image} alt=${character.name} width='200'>
                  </div>
              `;
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err,
        footer: `No se pudieron obtener los personajes`,
      });
    }
  };
  obtenerPersonajes();
});
