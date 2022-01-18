'use strict';

const db = require('../database/models');

module.exports = {
    list: async (req, res) => {
        res.render('genresList', {
            genres: (await db.Genres.findAll())
        });
    },
    detail: async (req, res) => {
        res.render('genresDetail', {
            genre: (await db.Genres.findByPk(req.params.id))
        });
    }
};