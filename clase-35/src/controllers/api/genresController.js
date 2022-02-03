const db = require('../../database/models');
const sequelize = db.sequelize;

const genresController = {
    list: (req, res) => {
        db.Genre.findAll()
            .then(genres => res.send({
                meta: {
                    // Status success (OK)
                    status: 200,
                    total: genres.length,
                    url: 'api/genres'
                },
                data: genres
        }))
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => res.send(genre));
    }
}

module.exports = genresController;