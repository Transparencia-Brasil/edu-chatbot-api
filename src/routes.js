const express = require('express');
const EscolaController = require('./controllers/EscolaController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ status: 'OK'});
});

routes.get('/escolas/pesquisar', EscolaController.search);

module.exports = routes;