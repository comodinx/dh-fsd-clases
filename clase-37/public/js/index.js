//
// Micro Desafio 1
//

// ● Desde el archivo /public/js/index.js, capturar los siguientes elementos: <main>, <h2>, <a> y <p>, ubicados en el archivo: /views//index.ejs.
const body = document.querySelector('body');
const main = document.querySelector('main');
const h2 = document.querySelector('h2');
const as = document.querySelectorAll('a');
const ps = document.querySelectorAll('p');


// ● Haciendo uso del prompt, indicar al usuario que: “Ingrese su nombre”.
const name = prompt('Ingrese su nombre');
h2.textContent = name || 'Invitado';


// ● Agregar a la etiqueta <h2> el estilo uppercase.
h2.style.textTransform = 'uppercase';


// ● A la etiqueta <a>, colocarle el estilo correspondiente para que asuma el siguiente color: #E51B3E.
as.forEach(a => a.style.color = '#E51B3E');


// ● Mediante el confirm, preguntar al usuario “¿Desea colocar un fondo de pantalla?”. Si la respuesta es afirmativa por parte del usuario, agregar al <body> la clase “fondo”.
if (confirm('¿Desea colocar un fondo de pantalla?')) {
    body.classList.add('fondo');
}


// ● A todos los párrafos que fueron capturados, asignar a los pares la clase: “descatadoPar”. Y a los impares agregar la clase: “destacadoImpar”.
ps.forEach((p, i) => p.classList.add((i % 2) === 0 ? 'destacadoPar' : 'destacadoImpar'));


// ● Finalmente, establecer como visible a la etiqueta <main> en el browser o navegador, aplicando el estilo: display: block.
main.style.display = 'block';
