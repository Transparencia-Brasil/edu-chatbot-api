const Escola = require('../models/Escola');

module.exports = {
  async search(req, res) {
    const { nome, cidade, uf, ensino } = req.query;
    console.log(uf);
    const escola = await Escola.findOne();
    return res.json(escola);
  }
}