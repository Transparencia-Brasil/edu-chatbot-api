const express = require('express');
const EscolaController = require('./controllers/EscolaController');
const MunicipioController = require('./controllers/MunicipioController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ status: 'OK'});
});

routes.get('/escolas/pesquisar', EscolaController.search);
routes.get('/municipios/pesquisar', MunicipioController.search);

module.exports = routes;