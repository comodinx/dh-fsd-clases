//
// imports
//
const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

//
// mapping
//
router.get('/', controller.home);
router.get('/about', controller.about);

//
// export
//
module.exports = router;
