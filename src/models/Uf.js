const { Model, DataTypes } = require('sequelize');

class Uf extends Model {
  static init(connection) {
    super.init({
      codigo_uf: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      uf: DataTypes.STRING,
      nome: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
    }, {
      sequelize: connection,
      timestamps: false
    })
  }

  static associate(models) {
    this.hasMany(models.Municipio, { foreignKey: 'codigo_uf', as : 'municipios' })
  }
}

module.exports = Uf;