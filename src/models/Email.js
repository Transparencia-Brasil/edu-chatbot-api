const { Model, DataTypes } = require('sequelize');

class Email extends Model {
  static init(connection) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      escola_id: DataTypes.INTEGER,
      email_gestao: DataTypes.STRING,
    }, {
      sequelize: connection,
      timestamps: false
    })
  }

  static associate(models) {
    this.belongsTo(models.Escola, { foreignKey: 'co_entidade', as : 'escola' })
  }
}

module.exports = Email;