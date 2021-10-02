const { Op, Sequelize } = require('sequelize');
const Resposta = require('../models/Resposta');

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

    let pontuacao = 0;
    Object.keys(resposta.dataValues).map((item) => {
      switch (item) {
        case "aulas":
          pontuacao += (resposta.dataValues['aulas'] === "Sim") ? 1 : 0
          break;
        case "patio_descoberto":
          pontuacao += (resposta.dataValues['patio_descoberto'] === "Sim") ? 1 : 0
          break;
      
        default:
          break;
      }
    });
    res.json({
      pontuacao,
      resposta
    });
  }
}