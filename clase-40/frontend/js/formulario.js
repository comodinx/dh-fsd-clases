//
// constants
//
const successClassIsValid = 'is-valid';
const errorClassIsInvalid = 'is-invalid';

//
// variables
//
let form;
let h1;
let id;
let title;
let rating;
let awards;
let releaseDate;
let length;
let buttonCreate;
let buttonUpdate;
let buttonDestroy;

window.onload = () => {
  form = document.querySelector('form');
  h1 = document.querySelector('h1');
  id = document.querySelector('#id');
  title = document.querySelector('#title');
  rating = document.querySelector('#rating');
  awards = document.querySelector('#awards');
  releaseDate = document.querySelector('#release_date');
  length = document.querySelector('#length');
  buttonCreate = document.querySelector('.botonAgregar');
  buttonUpdate = document.querySelector('.botonModificar');
  buttonDestroy = document.querySelector('.botonBorrar');

  // Micro desafios
  microdesafio1();
};

//
// Micro desafio #1
//
function microdesafio1 () {
  loadMovie();
  attackEvents();
}

/**
 * ● En formulario.html: cargar los datos de una película en particular, para luego poder modificarla y/o eliminarla utilizando los endpoints:
 *   ○ Detalle de una película: router.get('/:id', moviesAPIController.detail);
 *   ○ Modificar una película: router.put('/update/:id', moviesAPIController.update);
 */
function loadMovie () {
  const id = (new URLSearchParams(location.search)).get('movie');

  if (!id) {
    return handleCreate();
  }
  return handleUpdate(id);
}

/**
 * Handle creation
 */
function handleCreate () {
  // Set header
  h1.innerText = 'Crear una nueva pelicula';

  // Show/Hide actions
  buttonCreate.style.display = 'inline-block';
  buttonUpdate.style.display = 'none';
  buttonDestroy.style.display = 'none';
}

/**
 * Handle updation
 */
function handleUpdate (idMovie) {
  // Show/Hide actions
  buttonUpdate.style.display = 'inline-block';
  buttonDestroy.style.display = 'inline-block';
  buttonCreate.style.display = 'none';

  // Fetch movie by ID
  fetch('http://localhost:3031/api/movies/' + idMovie)
    .then(res => res.json())
    .then(pelicula => {

      /** Codigo que debemos usar para mostrar los datos en el frontend */
      let movie = pelicula.data;

      // Set header
      h1.innerText = 'Editando "' + movie.title +'"';

      id.value = movie.id;
      title.value = movie.title;
      rating.value = movie.rating;
      awards.value = movie.awards;
      releaseDate.value = movie.release_date.split('T')[0];
      length.value = movie.length;
    })
    .catch(() => location.href = '404.html');
}

/**
 * Attack form events
 */
function attackEvents () {
  // Inputs events
  title.addEventListener('blur', () => validateEmpty(title));
  rating.addEventListener('blur', () => validarRating());
  awards.addEventListener('blur', () => validarAwards());
  releaseDate.addEventListener('change', () => validateEmpty(releaseDate));
  length.addEventListener('blur', () => validarLength());

  // Action events
  buttonCreate.addEventListener('click', e => {
    e.preventDefault();
    submitFormCreate();
  });
  buttonUpdate.addEventListener('click', e => {
    e.preventDefault();
    submitFormUpdate();
  });
  buttonDestroy.addEventListener('click', e => {
    e.preventDefault();
    movieDestroy();
  });
}

/**
 * Handle submit form for create
 */
function submitFormCreate () {
  // Validate form
  if (!validate()) {
    return;
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(getBody()),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Try to create movie
  fetch('http://localhost:3031/api/movies/create', options)
    .then(res => res.json())
    .then(() => {
      alert('\n!FELICITACIONES!\n\nLa pelicula se agrego correctamente.');
      location.href = 'home.html';
    })
    .catch(e => {
      console.error((e && e.response) || (e && e.message) || e);
      alert((e && e.response) || (e && e.message) || e);
    });
}

/**
 * Handle submit form for update
 */
function submitFormUpdate () {
  // Validate form
  if (!validate()) {
    return;
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(getBody()),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Try to update movie
  fetch('http://localhost:3031/api/movies/update/' + id.value + '?_method=PUT', options)
    .then(res => res.json())
    .then(() => {
      alert('\n!FELICITACIONES!\n\nLa pelicula se actualizo correctamente.');
      location.href = 'home.html';
    })
    .catch(e => {
      console.error((e && e.response) || (e && e.message) || e);
      alert((e && e.response) || (e && e.message) || e);
    });
}

/**
 * Handle movie destroy
 */
function movieDestroy () {
  if (!confirm('¿Estas seguro? Esta opción es permanente!')) {
    return;
  }

  const options = {
    method: 'POST'
  };

  // Try to delete movie
  fetch('http://localhost:3031/api/movies/delete/' + id.value + '?_method=DELETE', options)
    .then(res => res.json())
    .then(() => {
      alert('\n\nLa pelicula se borro correctamente.');
      location.href = 'home.html';
    })
    .catch(e => {
      console.error((e && e.response) || (e && e.message) || e);
      alert((e && e.response) || (e && e.message) || e);
    });
}

/**
 * Get all input in an object
 */
function getBody () {
  return {
    title: title.value,
    rating: rating.value,
    awards: awards.value,
    release_date: releaseDate.value,
    length: length.value
  };
}

/**
 * Validate all inputs
 */
function validate () {
  let valid = true;

  // Ejecuto la validacion del field y "valid", para que se ejecuten todas las validaciones.
  // PEROO... cualquiera de ellas que devuelva "false", entonces siempre valid sera "false".
  valid = validateEmpty(title) && valid;
  valid = validarRating() && valid;
  valid = validarAwards() && valid;
  valid = validateEmpty(releaseDate) && valid;
  valid = validarLength() && valid;
  return valid;
}

/**
 * Validation functions :: BEGIN
 */
function validateEmpty (field) {
  field.classList.remove(successClassIsValid);
  field.classList.remove(errorClassIsInvalid);
  delete field.dataset.error;

  if (!field.value) {
    mostrarError(field, 'Este campo es requerido');
    return false;
  }
  else {
    field.classList.add(successClassIsValid)
    return true;
  }
}

function validateLength (field, min, max) {
  const length = Number(field.value.replace(',', '.'));

  if (length < min || length > max) {
    mostrarError(field, `Por favor ingrese un valor entre ${min} y ${max}`);
    return false;
  }
  else {
    field.classList.add(successClassIsValid)
    return true;
  }
}

function validarRating () {
  return validateEmpty(rating) && validateLength(rating, 1, 10);
}

function validarAwards () {
  return validateEmpty(awards) && validateLength(awards, 1, 10);
}

function validarLength () {
  return validateEmpty(length) && validateLength(length, 60, 360);
}

/**
 * Validation functions :: END
 */
