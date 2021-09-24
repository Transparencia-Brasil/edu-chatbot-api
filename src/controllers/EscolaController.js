const { Op, Sequelize } = require('sequelize');
const Escola = require('../models/Escola');

module.exports = {
  async search(req, res) {
    const { nome, municipio, uf } = req.query;

    const whereClause = [];
    if (typeof nome !== 'undefined') {
      whereClause.push(
        Sequelize.where(
          Sequelize.fn('LOWER', Sequelize.col('no_entidade')),
          {
            [Op.like]: '%' + nome.toLowerCase() + '%'
          }
        )
      );
    }
    if (typeof municipio !== 'undefined') {
      whereClause.push({ 'co_municipio': municipio });
    }
    if (typeof uf !== 'undefined') {
      whereClause.push({ 'co_uf': uf });
    }

    const escolas = await Escola.findAll({
      where: {
        [Op.and]: [
          whereClause
        ]
      }
    });

    return res.json(escolas);
  }
}