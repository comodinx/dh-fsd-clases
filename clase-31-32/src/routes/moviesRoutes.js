const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const moviesScheme = require('../schemes/moviesScheme');

router.get('/movies', moviesController.list);
router.get('/movies/add', moviesController.add);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
router.post('/movies/create', moviesScheme, moviesController.create);

module.exports = router;