const express = require('express');
const AvaliacaoController = require('./controllers/AvaliacaoController');
const EscolaController = require('./controllers/EscolaController');
const MunicipioController = require('./controllers/MunicipioController');
const RespostaController = require('./controllers/RespostaController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ status: 'OK'});
});

routes.get('/escolas', EscolaController.find);
routes.get('/escolas/pesquisar', EscolaController.search);
routes.get('/municipios/pesquisar', MunicipioController.search);
routes.get('/respostas', RespostaController.index);
routes.get('/respostas/:id', RespostaController.get);
routes.post('/respostas/inicio', RespostaController.storeInicio);
routes.post('/respostas/aulas', RespostaController.storeAulas);
routes.post('/respostas/infra', RespostaController.storeInfra);
routes.post('/respostas/fim', RespostaController.storeFim);
routes.get('/avaliacao/:user_id', AvaliacaoController.get);

module.exports = routes;