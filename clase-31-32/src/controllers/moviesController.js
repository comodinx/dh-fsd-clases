'use strict';

const { validationResult } = require('express-validator');
const { formatSequelize } = require('../helpers/errors');
const { formatDate } = require('../helpers/date');
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
    },
    add: async (req, res) => {
        res.render('moviesAdd');
    },
    create: async (req, res) => {
        // Check errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render('moviesAdd', {
                errors: errors.array(),
                old: req.body
            });
        }

        // Normalize body
        const { title, rating, awards, length, release_date } = req.body;

        try {
            // Try to insert movie
            await db.Movies.create({ title, rating, awards, length, release_date });

            // Redirect to movies
            res.redirect('/movies');
        }
        catch (e) {
            console.error('Error on create movie', e);
            return res.status(400).render('moviesAdd', {
                errors: [{
                    param: 'general',
                    msg: formatSequelize(e)
                }],
                old: req.body
            });
        }
    },
    edit: async (req, res) => {
        const movie = await db.Movies.findByPk(req.params.id, { raw: true });

        movie.release_date = formatDate(movie.release_date.toISOString());

        res.render('moviesEdit', { movie });
    },
    update: async (req, res) => {
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
        const { title, rating, awards, length, release_date } = req.body;

        try {
            // Try to get movie
            await db.Movies.findByPk(id);

            // Try to update movie
            await db.Movies.update({ title, rating, awards, length, release_date }, {
                where: { id }
            });

            // Redirect to movies
            res.redirect('/movies');
        }
        catch (e) {
            console.error('Error on update movie', e);
            return res.status(400).render('moviesEdit', {
                errors: [{
                    param: 'general',
                    msg: formatSequelize(e)
                }],
                old: req.body
            });
        }
    },
    destroy: async (req, res) => {
        // Normalize body
        const { id } = req.params;
        let movie;

        try {
            // Try to get movie
            movie = await db.Movies.findByPk(id);
        }
        catch (e) {
            console.error('Error on destroy movie', e);
            // Redirect to movie details
            res.status(404).redirect(`/movies/detail/${id}`);
        }

        try {
            // Try to destroy movie
            await db.Movies.destroy({
                where: { id }
            });

            // Redirect to movies
            res.redirect('/movies');
        }
        catch (e) {
            console.error('Error on destroy movie', e);
            return res.status(500).render('moviesDetail', {
                errors: [{
                    param: 'general',
                    msg: formatSequelize(e)
                }],
                movie
            });
        }
    }
};
