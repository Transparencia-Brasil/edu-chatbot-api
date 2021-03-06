const { Op, Sequelize } = require("sequelize");
const { Parser } = require("json2csv");

const Resposta = require("../models/Resposta");
const Escola = require("../models/Escola");
const Email = require("../models/Email");
const Municipio = require("../models/Municipio");
const Uf = require("../models/Uf");

const { getCartaCompleta } = require("../scripts/geradorCartas");

module.exports = {
  async find(req, res) {
    try {
      const { formato } = req.query;
      const respostas = await Resposta.findAll({
        where: {
          [Op.and]: [
            { confirma_veracidade: "Sim" },
            {
              [Op.or]: [
                { professores_usando_mascara: "Às vezes" },
                { professores_usando_mascara: "Nunca" },
                { alunos_usando_mascara: "Às vezes" },
                { alunos_usando_mascara: "Nunca" },
                { distanciamento_sala: "Sim" },
                { distanciamento_merenda: "Não" },
                { espaco_alternativo_merenda: "Sim" },
                { ventilacao: "Apenas portas ou apenas janelas" },
                { ventilacao: "Não" },
                { patio_descoberto: "Não" },
                { agua_lavar_maos: "Não" },
                { area_verde: "Não" },
              ],
            },
          ],
        },
        include: [
          {
            model: Escola,
            as: "escola",
            include: [
              {
                attributes: ["nome"],
                model: Municipio,
                as: "municipio",
                include: [
                  {
                    attributes: ["uf"],
                    model: Uf,
                    as: "uf",
                  },
                ],
              },
              {
                attributes: ["email_gestao"],
                model: Email,
                as: "emails",
              },
            ],
          },
        ],
        order: [["created_at", "DESC"]],
      });

      const cartas = respostas.map((resposta) => {
        const emails = resposta.escola.emails.map(
          (email) => email["email_gestao"]
        );
        return {
          id: resposta.id,
          timestamp: resposta.updatedAt,
          escola_id: resposta.escola.co_entidade,
          municipio: resposta.escola.municipio.nome,
          uf: resposta.escola.municipio.uf.uf,
          emails: emails.join(", "),
          carta: getCartaCompleta(resposta, resposta.escola),
        };
      });

      if (formato === "csv") {
        const json2csv = new Parser();
        const csv = json2csv.parse(cartas);
        res.header("Content-Type", "text/csv");
        res.attachment("cartas.csv");

        return res.send(csv);
      }

      return res.json(cartas);
    } catch (err) {
      console.log(err);
      return res.json({ msg: "Ops! Houve um erro." });
    }
  },
};
