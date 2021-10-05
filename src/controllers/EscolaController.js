const { Op, Sequelize } = require('sequelize');
const Escola = require('../models/Escola');

module.exports = {
  async search(req, res) {
    const { nome, municipio, uf } = req.query;
    if (typeof nome === 'undefined') {
      return res.json([]);
    }

    const termos = nome.split(' ').join(' | ');

    const where = [];
    let whereClause = '';
    if (typeof uf !== 'undefined' || typeof municipio !== 'undefined') {
      where.push(' AND');
      if (typeof municipio !== 'undefined') {
        where.push('co_municipio = :municipio AND');
      }
      if (typeof uf !== 'undefined') {
        where.push('co_uf = :uf AND');
      }
      whereClause = where.join(' ');
      whereClause = whereClause.substr(0, whereClause.length - 4);
    }
    
    const result = await Escola.sequelize.query(`
      SELECT
        nu_ano_censo,
        co_entidade,
        no_entidade,
        co_orgao_regional,
        tp_situacao_funcionamento,
        dt_ano_letivo_inicio,
        dt_ano_letivo_termino,
        co_regiao,
        co_mesorregiao,
        co_microrregiao,
        co_uf,
        co_municipio,
        co_distrito,
        in_agua_inexistente,
        in_agua_potavel,
        in_area_verde,
        in_patio_descoberto,
        ts_rank_cd(fulltext_vector, query) AS rank
      FROM
        ${Escola.tableName},
        to_tsquery('Portuguese', :query) AS query
      WHERE
        fulltext_vector @@ query${whereClause}
      ORDER BY
        rank DESC
      LIMIT 10;`, {
          model: Escola,
          replacements: {
            query: termos,
            uf: uf,
            municipio: municipio
          }
        });
    // console.log(JSON.stringify(result[0]));
    // const escolas = await Escola.findAll({
    //   where: {
    //     [Op.and]: [
    //       whereClause
    //     ],
    //     co_entidade: {
    //       [Op.in]: result.map(r => `${r['co_entidade']}`)
    //     }
    //   }
    // })

    return res.json(result);
  },

  async find(req, res) {
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