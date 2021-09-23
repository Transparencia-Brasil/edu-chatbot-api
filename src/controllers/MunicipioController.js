const { Op } = require('sequelize');
const Municipio = require('../models/Municipio');
const Uf = require('../models/Uf');

module.exports = {
  async search(req, res) {
    const { nome, uf } = req.query;

    const whereClause = [];
    if (typeof nome !== 'undefined') {
      whereClause.push({
        'nome': { [Op.like]: '%' + nome + '%' }
      });
    }
    let whereUf = true;
    if (typeof uf !== 'undefined') {
      whereUf = { 'uf': uf }
    }

    const municipios = await Municipio.findAll({
      where: {
        [Op.and]: [
          whereClause
        ]
      },
      include: {
        model: Uf,
        as: 'uf',
        where: whereUf
      }
    });

    return res.json(municipios);
  }
}