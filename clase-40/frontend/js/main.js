//
// variables 
//
let app;
let container;
  

window.onload = () => {
  app = document.getElementById("root");
  container = document.createElement("div");

  container.setAttribute("class", "container");
  app.appendChild(container);

  // Micro desafios
  microdesafio1();
};

//
// Micro desafio #1
//
function microdesafio1 () {
  loadMovies();
}

/**
 * ● En home.html: listar todas las películas que nos trae el endpoint de listado de películas: router.get('/', moviesAPIController.list);
 */
function loadMovies () {

  // Aqui debemos agregar nuestro fetch
  fetch('http://localhost:3031/api/movies')
    .then(res => res.json())
    .then(peliculas => {

      /** Codigo que debemos usar para mostrar los datos en el frontend */
      let data = peliculas.data;

      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const a = document.createElement("a");
        a.setAttribute("href", "formulario.html?movie=" + movie.id);
        a.style.textDecoration = 'none';
        a.style.color = '#ccc';

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        container.appendChild(card);
        card.appendChild(a);
        a.appendChild(h1);
        a.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          a.appendChild(genero);
        }
        a.appendChild(duracion);
      });

    });
}
