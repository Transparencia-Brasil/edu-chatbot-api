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

  async store(req, res) {
    const { 
      user_id,
      aluno_rede_publica,
      aulas,
      formato_aulas,
      professores_usando_mascara,
      alunos_usando_mascara,
      quantidade_alunos_aula_presencial,
      distanciamento_sala,
      distanciamento_merenda,
      espaco_alternativo_merenda,
      patio_descoberto,
      agua_lavar_maos,
      agua_beber,
      area_verde,
      confirma_veracidade,
      complemento
     } = req.body;

    const resposta = await Resposta.create({ 
      user_id,
      aluno_rede_publica,
      aulas,
      formato_aulas,
      professores_usando_mascara,
      alunos_usando_mascara,
      quantidade_alunos_aula_presencial,
      distanciamento_sala,
      distanciamento_merenda,
      espaco_alternativo_merenda,
      patio_descoberto,
      agua_lavar_maos,
      agua_beber,
      area_verde,
      confirma_veracidade,
      complemento
     });

    return res.json(resposta);
  }
}