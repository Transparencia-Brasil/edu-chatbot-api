const { Model, DataTypes } = require('sequelize');

class Escola extends Model {
  static init(connection) {
    super.init({
      nu_ano_censo: DataTypes.INTEGER,
      co_entidade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      no_entidade: DataTypes.STRING,
      co_orgao_regional: DataTypes.STRING,
      tp_situacao_funcionamento: DataTypes.INTEGER,
      dt_ano_letivo_inicio: DataTypes.DATEONLY,
      dt_ano_letivo_termino: DataTypes.DATEONLY,
      co_regiao: DataTypes.INTEGER,
      co_mesorregiao: DataTypes.INTEGER,
      co_microrregiao: DataTypes.INTEGER,
      co_uf: DataTypes.INTEGER,
      co_municipio: DataTypes.INTEGER,
      co_distrito: DataTypes.INTEGER
    }, {
      sequelize: connection,
      timestamps: false
    })
  }
}

module.exports = Escola;