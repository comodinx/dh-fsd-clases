'use strict';

const { body } = require('express-validator');

module.exports = [
    body('title').not().isEmpty().withMessage('Please insert title'),
    body('rating').isFloat().withMessage('Please insert rating'),
    body('awards').isInt().withMessage('Please insert awards'),
    body('length').isInt().withMessage('Please insert length'),
    body('release_date').isDate().withMessage('Please insert release date')
];
