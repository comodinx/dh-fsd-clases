module.exports = (sequelize, DataTypes) => {
    let alias = 'ActorMovie'; // esto debería estar en singular
    let cols = {
        actor_id: DataTypes.INTEGER,
        movie_id: DataTypes.INTEGER
    };
    let config = {
        timestamps: false,
        deletedAt: false
    }
    const ActorMovie = sequelize.define(alias,cols,config)

    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Movie - Actor)
    ActorMovie.associate = function(models) {
        ActorMovie.belongsTo(models.Actor, {
            foreignKey: 'actor_id'
        })
        ActorMovie.belongsTo(models.Movie, {
            foreignKey: 'movie_id'
        })
    }

    return ActorMovie
};
