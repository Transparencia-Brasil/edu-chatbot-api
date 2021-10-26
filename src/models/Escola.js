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
      co_municipio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'municipios', key: 'codigo_ibge' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      co_distrito: DataTypes.INTEGER,
      // in_agua_inexistente: DataTypes.INTEGER,
      in_agua_potavel: DataTypes.INTEGER,
      in_area_verde: DataTypes.INTEGER,
      in_patio_descoberto: DataTypes.INTEGER,
      rede: DataTypes.STRING,
      nome_mun_formatado: DataTypes.STRING,
      escola_limpo: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false
    })
  }

  static associate(models) {
    this.hasMany(models.Email, { foreignKey: 'escola_id', as : 'emails' })
    this.hasOne(models.Municipio, { foreignKey: 'codigo_ibge', sourceKey: 'co_municipio', as: 'municipio' })
  }
}

module.exports = Escola;