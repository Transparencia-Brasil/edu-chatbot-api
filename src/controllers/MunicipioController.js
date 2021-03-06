const { Op, Sequelize } = require("sequelize");
const Municipio = require("../models/Municipio");
const Uf = require("../models/Uf");

module.exports = {
  async search(req, res) {
    try {
      const { nome, uf } = req.query;

      const whereClause = [];
      if (typeof nome !== "undefined") {
        whereClause.push({
          [Op.or]: [
            Sequelize.where(
              Sequelize.fn("LOWER", Sequelize.col("Municipio.nome")),
              {
                [Op.like]: "%" + nome.toLowerCase() + "%",
              }
            ),
            Sequelize.where(
              Sequelize.fn("LOWER", Sequelize.col("Municipio.nome_formatado")),
              {
                [Op.like]: "%" + nome.toLowerCase() + "%",
              }
            ),
          ],
        });
      }
      let whereUf = [];
      if (typeof uf !== "undefined") {
        whereClause.push(
          Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("uf.uf")), {
            [Op.eq]: uf.toLowerCase(),
          })
        );
      }

      const municipios = await Municipio.findAll({
        where: {
          [Op.and]: [whereClause],
        },
        include: {
          model: Uf,
          as: "uf",
          where: whereUf,
        },
      });

      return res.json(municipios);
    } catch (err) {
      console.log(err);
      return res.json({ msg: "Ops! Houve um erro." });
    }
  },
};
