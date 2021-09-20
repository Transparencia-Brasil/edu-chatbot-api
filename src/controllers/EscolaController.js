const { Op } = require('sequelize');
const Escola = require('../models/Escola');

module.exports = {
  async search(req, res) {
    const { nome, cidade, uf, ensino } = req.query;

    const whereClause = [];
    if (typeof nome !== 'undefined') {
      whereClause.push({
        'no_entidade': { [Op.like]: '%' + nome + '%' }
      });
    }
    if (typeof cidade !== 'undefined') {
      whereClause.push({ 'co_municipio': cidade });
    }
    if (typeof uf !== 'undefined') {
      whereClause.push({ 'co_uf': uf });
    }

    const escola = await Escola.findAll({
      where: {
        [Op.and]: [
          whereClause
        ]
      }
    });

    return res.json(escola);
  }
}