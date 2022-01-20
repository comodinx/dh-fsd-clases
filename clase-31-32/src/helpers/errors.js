'use strict';

module.exports = {
    formatSequelize: error => {
        if (error) {
            switch (error.name) {
                case 'SequelizeForeignKeyConstraintError':
                    return `The entity (${error.table}) has active relationships with other entities.`;
            }
        }
        return error.sqlMessage || error.message || 'Internal Server Error';
    }
};
