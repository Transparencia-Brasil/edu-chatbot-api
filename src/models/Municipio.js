const { Model, DataTypes } = require('sequelize');

class Municipio extends Model {
  static init(connection) {
    super.init({
      codigo_ibge: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      nome: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      capital: DataTypes.STRING,
      codigo_uf: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'ufs', key: 'codigo_uf' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      siafi_id: DataTypes.INTEGER,
      ddd: DataTypes.INTEGER,
      fuso_horario: DataTypes.STRING,
      nome_formatado: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false
    })
  }

  static associate(models) {
    this.belongsTo(models.Uf, { foreignKey: 'codigo_uf', as : 'uf' })
  }
}

module.exports = Municipio;