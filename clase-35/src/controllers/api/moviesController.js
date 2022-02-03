const db = require('../../database/models');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    //Aqui dispongo las rutas para trabajar con el CRUD
    create: function (req,res) {
        Movies
        .create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(movie => res.send(movie))
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let movieId = req.params.id;

        Movies
            // force: true es para asegurar que se ejecute la acción
            .destroy({where: {id: movieId}, force: true})
            .then(result => res.send({ deletedMovies: result }))
            .catch(error => res.send(error)) 
    }
}

module.exports = moviesController;