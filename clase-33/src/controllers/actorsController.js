'use strict';

const db = require('../database/models');

module.exports = {
    list: async (req, res) => {
        res.render('actorsList', {
            actors: (await db.Actor.findAll())
        });
    },
    detail: async (req, res) => {
        res.render('actorsDetail', {
            actor: (await db.Actor.findByPk(req.params.id))
        });
    }
};