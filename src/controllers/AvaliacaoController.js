const { Op, Sequelize } = require("sequelize");
const Resposta = require("../models/Resposta");

const {
  calcularPontuacaoTotal,
  calcularPontuacaoFaseAulas,
  calcularPontuacaoFaseInfra,
} = require("../scripts/avaliacao");

module.exports = {
  async get(req, res) {
    try {
      const user_id = req.params.user_id;
      const resposta = await Resposta.findOne({
        where: {
          user_id: user_id,
        },
        order: [["created_at", "DESC"]],
      });

      if (!resposta) {
        res.json({
          pontuacao: null,
          qtdRespostas: null,
          resultado: "Resposta não encontrada",
          resposta: null,
        });
        return;
      }

      const avaliacao = calcularPontuacaoTotal(resposta);

      res.json({
        pontuacao: avaliacao.pontuacao,
        qtdRespostas: avaliacao.qtdRespostas,
        resultado: avaliacao.resultado,
        resposta,
      });
    } catch (err) {
      console.log(err);
      return res.json({ msg: "Ops! Houve um erro." });
    }
  },

  async getAulas(req, res) {
    try {
      const user_id = req.params.user_id;
      const resposta = await Resposta.findOne({
        where: {
          user_id: user_id,
        },
        order: [["created_at", "DESC"]],
      });

      if (!resposta) {
        res.json({
          pontuacao: null,
          qtdRespostas: null,
          resultado: "Resposta não encontrada",
          resposta: null,
        });
        return;
      }

      const avaliacao = calcularPontuacaoFaseAulas(resposta);

      res.json({
        pontuacao: avaliacao.pontuacao,
        qtdRespostas: avaliacao.qtdRespostas,
        resultado: "--",
        resposta,
      });
    } catch (err) {
      console.log(err);
      return res.json({ msg: "Ops! Houve um erro." });
    }
  },

  async getInfra(req, res) {
    try {
      const user_id = req.params.user_id;
      const resposta = await Resposta.findOne({
        where: {
          user_id: user_id,
        },
        order: [["created_at", "DESC"]],
      });

      if (!resposta) {
        res.json({
          pontuacao: null,
          qtdRespostas: null,
          resultado: "Resposta não encontrada",
          resposta: null,
        });
        return;
      }

      const avaliacao = calcularPontuacaoFaseInfra(resposta);

      res.json({
        pontuacao: avaliacao.pontuacao,
        qtdRespostas: avaliacao.qtdRespostas,
        resultado: "--",
        resposta,
      });
    } catch (err) {
      console.log(err);
      return res.json({ msg: "Ops! Houve um erro." });
    }
  },
};
