'use strict';

/*
+--------------+-----------------------+------+-----+---------+----------------+
| Field        | Type                  | Null | Key | Default | Extra          |
+--------------+-----------------------+------+-----+---------+----------------+
| id           | int unsigned          | NO   | PRI | NULL    | auto_increment |
| created_at   | timestamp             | YES  |     | NULL    |                |
| updated_at   | timestamp             | YES  |     | NULL    |                |
| title        | varchar(500)          | NO   |     | NULL    |                |
| rating       | decimal(3,1) unsigned | NO   |     | NULL    |                |
| awards       | int unsigned          | NO   |     | 0       |                |
| release_date | datetime              | NO   |     | NULL    |                |
| length       | int unsigned          | YES  |     | NULL    |                |
| genre_id     | int unsigned          | YES  | MUL | NULL    |                |
+--------------+-----------------------+------+-----+---------+----------------+
*/

// const Genres = require('./genres');

module.exports = (sequelize, Types) => {
    const Movies = sequelize.define('Movies', {
        id: {
            type: Types.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: Types.STRING,
            allowNull: false
        },
        rating: {
            type: Types.DECIMAL,
            allowNull: false
        },
        awards: {
            type: Types.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        release_date: {
            type: Types.DATE,
            allowNull: false,
            defaultValue: 0
        },
        length: {
            type: Types.INTEGER.UNSIGNED,
            allowNull: true
        },
        genre_id: {
            type: Types.INTEGER.UNSIGNED,
            allowNull: true
        }
    }, {
        timestamps: true,
        underscored: true
    });

    // Relationships
    // Movies.belongsTo(Genres);

    return Movies;
};
