//
// constants
//
const successClassIsValid = 'is-valid';
const errorClassIsInvalid = 'is-invalid';

//
// variables
//
let form;
let title;
let rating;
let awards;
let releaseDate;
let length;
let genreId;

//
// functions
//
window.onload = () => {
  let titulo = document.querySelector('.moviesAddTitulo')
  let formulario = document.querySelector('#formulario');
  let article = document.querySelector('article');
  titulo.innerHTML = 'AGREGAR PELÍCULA';
  titulo.classList.add('titulo');
  article.classList.add('fondoTransparente');
  formulario.classList.add('fondoCRUD');

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  microdesafio1();
  //-------------------DE REGISTRO DE PELÍCULAS------------------//    
};

//
// Micro desafio 1
//
function microdesafio1 () {
  buscarCampos();
  focusEnTitulo();
  agregarValidaciones();
}

function buscarCampos () {
  form = document.querySelector('form');
  title = document.querySelector('#title');
  rating = document.querySelector('#rating');
  awards = document.querySelector('#awards');
  releaseDate = document.querySelector('#release_date');
  length = document.querySelector('#length');
  genreId = document.querySelector('#genre_id');
}


/**
  * ● Apenas cargue el formulario, debemos posicionarnos o tener el foco en el campo “Título de la película” de forma automática.
  */
function focusEnTitulo () {
  title.focus();
}

/**
  * ● Todos los campos son obligatorios, ninguno puede estar vacío.
  *
  * ● Si se trata de enviar el formulario (presionando el botón “Agregar”) estando todos o
  *   algún campo vacío —o que no cumpla con los requerimientos—, no será posible
  *   enviar el formulario; y a aquellos campos input o select con error se les deberá
  *   agregar la clase “is-invalid” . Esta ya se encuentra creada en el archivo:
  *   /public/css/style.css.
  *   ○ Las validaciones no solo deberán hacerse al enviar el formulario si no
  *     también al momento en el que el visitante interactúa con cada campo
  *     (validación on-time).
  *
  * ● De igual manera, aquellos campos que poseen error deberán tener un texto que
  *   especifique el tipo de error. Dicho texto deberá estar presente en el elemento con
  *   clase “is-invalid”. Esta ya se encuentra creada en el archivo: /public/css/style.css.
  *
  * ● El formulario contará con validaciones especiales para los siguientes campos:
  *   ○ Calificación y Premios: deberá validar que el valor ingresado esté comprendido entre cero (0) y diez (10).
  *   ○ Duración: deberá validar que el valor ingresado esté comprendido entre 60 y 360 minutos.
  *
  * ● Si los campos cumplen con los requerimientos exigidos, debemos hacer lo siguiente:
  *   ○ A todos los campos input o select se les deberá agregar la clase “is-valid”,
  *     como constancia que ese campo pasó la validación. Esta ya se encuentra
  *     creada en el archivo: /public/css/style.css.
  */
function agregarValidaciones () {
  form.addEventListener('submit', function (e) {
    if (!validarCampos()) {
      e.preventDefault();
      return false;
    }
    return true;
  });

  title.addEventListener('blur', () => validarVacio(title));
  rating.addEventListener('blur', () => validarRating());
  awards.addEventListener('blur', () => validarAwards());
  releaseDate.addEventListener('change', () => validarVacio(releaseDate));
  length.addEventListener('blur', () => validarLength());
  genreId.addEventListener('change', () => validarVacio(genreId));
}

function validarCampos () {
  let valid = true;

  // Ejecuto la validacion del campo y "valid", para que se ejecuten todas las validaciones.
  // PEROO... cualquiera de ellas que devuelva "false", entonces siempre valid sera "false".
  valid = validarVacio(title) && valid;
  valid = validarRating() && valid;
  valid = validarAwards() && valid;
  valid = validarVacio(releaseDate) && valid;
  valid = validarLength() && valid;
  valid = validarVacio(genreId) && valid;
  return valid;
}

function validarVacio (campo) {
  campo.classList.remove(successClassIsValid);
  campo.classList.remove(errorClassIsInvalid);
  delete campo.dataset.error;

  if (!campo.value) {
    mostrarError(campo, 'Este campo es requerido');
    return false;
  }
  else {
    campo.classList.add(successClassIsValid)
    return true;
  }
}

function validarTamanio (campo, min, max) {
  const tamanio = Number(campo.value);

  if (tamanio < min || tamanio > max) {
    mostrarError(campo, `Por favor ingrese un valor entre ${min} y ${max}`);
    return false;
  }
  else {
    campo.classList.add(successClassIsValid)
    return true;
  }
}

function validarRating () {
  return validarVacio(rating) && validarTamanio(rating, 1, 10);
}

function validarAwards () {
  return validarVacio(awards) && validarTamanio(awards, 1, 10);
}

function validarLength () {
  return validarVacio(length) && validarTamanio(length, 60, 360);
}

function mostrarError (campo, mensaje) {
  const errorContainer = document.querySelector(`#${campo.id}-error`);

  campo.classList.add(errorClassIsInvalid);
  errorContainer.innerText = mensaje;
}
