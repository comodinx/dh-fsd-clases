const path = require('path');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');
const { formatSequelize } = require('../helpers/errors');
const { formatDate } = require('../helpers/date');
const db = require('../database/models');
const sequelize = db.sequelize;


//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        db.Genre.findAll()
            .then(allGenres => {
                res.render('moviesAdd', {allGenres})
            })
    },
    create: function (req,res) {
        // Check errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render('moviesAdd', {
                errors: errors.array(),
                old: req.body
            });
        }

        // Normalize body
        const { title, rating, awards, length, release_date, genre_id } = req.body;
        const data = { title, rating, awards, length, release_date, genre_id };

        // Try to insert movie
        db.Movie
            .create(data)
            // Redirect to movies
            .then(() => res.redirect('/movies'))
            // Handle errors
            .catch(e => {
                console.error('Error on create movie', e);
                return res.status(400).render('moviesAdd', {
                    errors: [{
                        param: 'general',
                        msg: formatSequelize(e)
                    }],
                    old: req.body
                });
            });
    },
    edit: function(req,res) {
        const { id } = req.params;
        const promises = [
            db.Movie.findByPk(id, { include: ['genre'] }),
            db.Genre.findAll()
        ];

        Promise
            .all(promises)
            .then(([movie, allGenres]) => {
                movie.release_date = formatDate(movie.release_date.toISOString());

                res.render('moviesEdit', { Movie: movie, allGenres });
            })
            .catch(e => {
                res.render('moviesEdit', {
                    errors: [{
                        param: 'general',
                        msg: formatSequelize(e)
                    }],
                    Movie: {},
                    allGenres: []
                });
            });
    },
    update: function (req,res) {
        // Normalize body
        const { id } = req.params;

        // Check errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render('moviesEdit', {
                errors: errors.array(),
                movie: {
                    id,
                    ...req.body
                }
            });
        }

        // Normalize body
        const { title, rating, awards, length, release_date, genre_id } = req.body;
        const data = { title, rating, awards, length, release_date, genre_id };

        const promises = [
            db.Movie.findByPk(id),
            db.Movie.update(data, { where: { id } })
        ];

        Promise
            .all(promises)
            // Redirect to movies
            .then(() => res.redirect('/movies'))
            // Handle errors
            .catch(e => {
                console.error('Error on update movie', e);
                res.redirect(`/movies/edit/${id}`)
            });
    },
    delete: function (req,res) {
        // ¿?
    },
    destroy: function (req,res) {
        // Normalize body
        const { id } = req.params;
        let movie;

        db.Movie
            // Try to get movie
            .findByPk(id)
            // Try to destroy movie
            .then(() => db.Movie.destroy({ where: { id } }))
            // Handle success
            .then(() => res.redirect('/movies'))
            // Handle errors
            .catch(e => {
                console.error('Error on destroy movie', e);
                return res.status(400).render('moviesDetail', {
                    errors: [{
                        param: 'general',
                        msg: formatSequelize(e)
                    }],
                    old: req.body
                });
            });
    }
}

module.exports = moviesController;