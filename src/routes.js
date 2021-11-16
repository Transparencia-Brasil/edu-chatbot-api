const express = require('express');
const jwt = require('jsonwebtoken');

const AvaliacaoController = require('./controllers/AvaliacaoController');
const EscolaController = require('./controllers/EscolaController');
const MunicipioController = require('./controllers/MunicipioController');
const RespostaController = require('./controllers/RespostaController');
const CartaController = require('./controllers/CartaController');
const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ status: 'OK'});
});

function checkToken(req, res, next) {
  const header = req.headers['authorization'];
  const token = header && header.split(' ')[1];
  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(400).json({ msg: "Token inválido" });
  }
}

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
routes.get('/avaliacao/:user_id/aulas', AvaliacaoController.getAulas);
routes.get('/avaliacao/:user_id/infra', AvaliacaoController.getInfra);
routes.get('/cartas', CartaController.find);
routes.get('/usuarios', checkToken, UsuarioController.index);
routes.post('/usuarios/registrar', UsuarioController.register);
routes.post('/usuarios/login', UsuarioController.login);

module.exports = routes;