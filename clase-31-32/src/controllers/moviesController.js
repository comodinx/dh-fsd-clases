'use strict';

const { validationResult } = require('express-validator');
const db = require('../database/models');

module.exports = {
    list: async (req, res) => {
        res.render('moviesList', {
            movies: (await db.Movies.findAll())
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
            res.redirect('/movies');
        }
        catch (e) {
            console.error('Error on create product', e);
            return res.status(400).render('moviesAdd', {
                errors: [{
                    param: 'general',
                    msg: e.sqlMessage || e.message
                }],
                old: req.body
            });
        }
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