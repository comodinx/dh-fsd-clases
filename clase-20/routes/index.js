const express = require('express');
const menus = require('../data/menu.json');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { title: 'Pimienta & Sal', menus }));

module.exports = router;
