const { Op, Sequelize } = require('sequelize');
const Resposta = require('../models/Resposta');

module.exports = {
  async index(req, res) {
    const respostas = await Resposta.findAll();

    return res.json(respostas);
  },

  async get(req, res) {
    const id = req.params.id
    const resposta = await Resposta.findByPk(id);

    return res.json(resposta);
  },

  async storeInicio(req, res) {
    const { 
      user_id,
      escola_id,
      aluno_rede_publica,
      relacao_escola,
      segmento_curso,
      nivel_escola,
      nome_escola,
     } = req.body;

    const resposta = await Resposta.create({
      user_id,
      escola_id,
      aluno_rede_publica,
      relacao_escola,
      segmento_curso,
      nivel_escola,
      nome_escola,
     });

    return res.json(resposta);
  },

  async storeAulas(req, res) {
    const { 
      user_id,
      formato_aulas,
      professores_usando_mascara,
      alunos_usando_mascara,
      distanciamento_sala,
      distanciamento_merenda,
      espaco_alternativo_merenda,
     } = req.body;

    const respostaInicio = await Resposta.findOne({
      where: {
        user_id: user_id
      },
      order: [
        ['created_at', 'DESC']
      ]
    });

    const resposta = await Resposta.update({
      formato_aulas,
      professores_usando_mascara,
      alunos_usando_mascara,
      distanciamento_sala,
      distanciamento_merenda,
      espaco_alternativo_merenda,
     }, {
       where: {
         id: respostaInicio.id
       }
     });

    return res.json(respostaInicio);
  },

  async storeInfra(req, res) {
    const { 
      user_id,
      patio_descoberto,
      agua_lavar_maos,
      agua_beber,
      area_verde,
     } = req.body;

    const respostaInicio = await Resposta.findOne({
      where: {
        user_id: user_id
      },
      order: [
        ['created_at', 'DESC']
      ]
    });

    const resposta = await Resposta.update({
      patio_descoberto,
      agua_lavar_maos,
      agua_beber,
      area_verde,
     }, {
       where: {
         id: respostaInicio.id
       }
     });

    return res.json(respostaInicio);
  },

  async storeFim(req, res) {
    const { 
      user_id,
      confirma_veracidade,
      complemento,
     } = req.body;

    const respostaInicio = await Resposta.findOne({
      where: {
        user_id: user_id
      },
      order: [
        ['created_at', 'DESC']
      ]
    });

    const resposta = await Resposta.update({
      confirma_veracidade,
      complemento,
     }, {
       where: {
         id: respostaInicio.id
       }
     });

    return res.json(respostaInicio);
  }
}