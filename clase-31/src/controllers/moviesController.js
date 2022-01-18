'use strict';

const db = require('../database/models');

module.exports = {
    list: async (req, res) => {
        res.render('moviesList', {
            movies: (await db.Movies.findAll())
        });
    },
    new: async (req, res) => {
        res.render('newestMovies', {
            movies: (await db.Movies.findAll({
                order: [['release_date', 'DESC']]
            }))
        });
    },
    recomended: async (req, res) => {
        res.render('recommendedMovies', {
            movies: (await db.Movies.findAll({
                order: [['rating', 'DESC']],
                limit: 5
            }))
        });
    },
    detail: async (req, res) => {
        res.render('moviesDetail', {
            movie: (await db.Movies.findByPk(req.params.id))
        });
    }
};