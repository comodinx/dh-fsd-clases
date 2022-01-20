'use strict';

/*
+-------------------+--------------+------+-----+---------+----------------+
| Field             | Type         | Null | Key | Default | Extra          |
+-------------------+--------------+------+-----+---------+----------------+
| id                | int unsigned | NO   | PRI | NULL    | auto_increment |
| created_at        | timestamp    | YES  |     | NULL    |                |
| updated_at        | timestamp    | YES  |     | NULL    |                |
| first_name        | varchar(100) | NO   |     | NULL    |                |
| last_name         | varchar(100) | NO   |     | NULL    |                |
| rating            | decimal(3,1) | YES  |     | NULL    |                |
| favorite_movie_id | int unsigned | YES  | MUL | NULL    |                |
+-------------------+--------------+------+-----+---------+----------------+
*/

module.exports = (sequelize, Types) => {
    const Actors = sequelize.define('Actors', {
        id: {
            type: Types.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            type: Types.STRING,
            allowNull: false
        },
        last_name: {
            type: Types.STRING,
            allowNull: false
        },
        rating: {
            type: Types.DECIMAL,
            allowNull: true
        },
        favorite_movie_id: {
            type: Types.INTEGER.UNSIGNED,
            allowNull: true
        }
    }, {
        timestamps: true,
        underscored: true
    });

    return Actors;
};