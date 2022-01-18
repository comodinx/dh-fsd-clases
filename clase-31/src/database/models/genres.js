'use strict';

/*
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| id         | int unsigned | NO   | PRI | NULL    | auto_increment |
| created_at | timestamp    | YES  |     | NULL    |                |
| updated_at | timestamp    | YES  |     | NULL    |                |
| name       | varchar(100) | NO   |     | NULL    |                |
| ranking    | int unsigned | NO   | UNI | NULL    |                |
| active     | tinyint(1)   | NO   |     | 1       |                |
+------------+--------------+------+-----+---------+----------------+
*/

module.exports = (sequelize, Types) => {
    const Genres = sequelize.define('Genres', {
        id: {
            type: Types.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Types.STRING,
            allowNull: false
        },
        ranking: {
            type: Types.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: Types.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        timestamps: true,
        underscored: true
    });

    return Genres;
};