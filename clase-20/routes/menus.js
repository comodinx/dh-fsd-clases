const express = require('express');
const menus = require('../data/menu.json');
const router = express.Router();

/* GET menu details. */
router.get('/:id', (req, res, next) => {
    const menu = menus.find(menu => menu.id === Number(req.params.id));

    if (!menu) {
        // Strategy used for response with 404
        return next();
    }
    return res.render('detalleMenu', { menu });
});

module.exports = router;
