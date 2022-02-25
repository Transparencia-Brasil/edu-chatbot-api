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

routes.get('/escolas', checkToken, EscolaController.find);
routes.get('/escolas/pesquisar', checkToken, EscolaController.search);
routes.get('/municipios/pesquisar', checkToken, MunicipioController.search);
routes.get('/respostas', checkToken, RespostaController.index);
routes.get('/respostas/:id', checkToken, RespostaController.get);
routes.post('/respostas/inicio', checkToken, RespostaController.storeInicio);
routes.post('/respostas/aulas', checkToken, RespostaController.storeAulas);
routes.post('/respostas/infra', checkToken, RespostaController.storeInfra);
routes.post('/respostas/fim', checkToken, RespostaController.storeFim);
routes.get('/avaliacao/:user_id', checkToken, AvaliacaoController.get);
routes.get('/avaliacao/:user_id/aulas', checkToken, AvaliacaoController.getAulas);
routes.get('/avaliacao/:user_id/infra', checkToken, AvaliacaoController.getInfra);
routes.get('/cartas', CartaController.find);
routes.get('/usuarios', checkToken, UsuarioController.index);
// routes.post('/usuarios/registrar', UsuarioController.register);
routes.post('/usuarios/login', UsuarioController.login);

module.exports = routes;