const { Op, Sequelize } = require('sequelize');
const Resposta = require('../models/Resposta');

const { calcularPontuacaoTotal, calcularPontuacaoFaseAulas, calcularPontuacaoFaseInfra } = require('../scripts/avaliacao');

module.exports = {
  async get(req, res) {
    const user_id = req.params.user_id
    const resposta = await Resposta.findOne({
      where: {
        user_id: user_id
      },
      order: [
        ['created_at', 'DESC']
      ]
    });

    if (!resposta) {
      res.json({
        pontuacao: null,
        resultado: "Resposta não encontrada",
        resposta: null
      });
    }

    const avaliacao = calcularPontuacaoTotal(resposta);

    res.json({
      pontuacao: avaliacao.pontuacao,
      resultado: avaliacao.resultado,
      resposta
    });
  },

  async getAulas(req, res) {
    const user_id = req.params.user_id
    const resposta = await Resposta.findOne({
      where: {
        user_id: user_id
      },
      order: [
        ['created_at', 'DESC']
      ]
    });

    if (!resposta) {
      res.json({
        pontuacao: null,
        resultado: "Resposta não encontrada",
        resposta: null
      });
    }

    const pontuacao = calcularPontuacaoFaseAulas(resposta);

    res.json({
      pontuacao: pontuacao,
      resultado: "--",
      resposta
    });
  },

  async getInfra(req, res) {
    const user_id = req.params.user_id
    const resposta = await Resposta.findOne({
      where: {
        user_id: user_id
      },
      order: [
        ['created_at', 'DESC']
      ]
    });

    if (!resposta) {
      res.json({
        pontuacao: null,
        resultado: "Resposta não encontrada",
        resposta: null
      });
    }

    const pontuacao = calcularPontuacaoFaseInfra(resposta)

    res.json({
      pontuacao: pontuacao,
      resultado: "--",
      resposta
    });
  }
}