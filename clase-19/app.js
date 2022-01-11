//
// imports
//
const path = require('path');
const express = require('express');
const routes = require('./routes');
const app = express();

//
// env vars
//
process.env.BASE_VIEWS_PATH = path.join(__dirname, 'views');

//
// constants
//
const port = process.env.PORT || 3000;

//
// middlewares
//
app.use(express.static('public'));

//
// routes
//

app.use('/', routes.main);

//
// listen application
//
app.listen(port, () => console.log(`Servidor iniciado - http://localhost:${port}`));
