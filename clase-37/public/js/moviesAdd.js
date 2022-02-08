//
// Micro Desafio 3
//

// ● Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>, <section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs.
const h1 = document.querySelector('h1');
const article = document.querySelector('article');
const section = document.querySelector('section');


// ● Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.
h1.textContent = 'AGREGAR PELÍCULAS';


// ● Agregar a la etiqueta <h1> la clase: “titulo”.
h1.classList.add('titulo');


// ● Agregar al artículo la clase: “fondoTransparente”.
article.classList.add('fondoTransparente');


// ● Agregar a la sección la clase: “fondoCRUD”.
section.classList.add('fondoCRUD');
