'use strict';

const db = require('../database/models');

module.exports = {
    list: async (req, res) => {
        res.render('actorsList', {
            actors: (await db.Actors.findAll())
        });
    },
    detail: async (req, res) => {
        res.render('actorsDetail', {
            actor: (await db.Actors.findByPk(req.params.id))
        });
    }
};