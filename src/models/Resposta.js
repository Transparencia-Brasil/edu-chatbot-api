const { Model, DataTypes } = require('sequelize');

class Resposta extends Model {
  static init(connection) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: DataTypes.STRING,
      escola_id: DataTypes.STRING,
      aluno_rede_publica: DataTypes.STRING,
      relacao_escola: DataTypes.STRING,
      segmento_curso: DataTypes.STRING,
      nivel_escola: DataTypes.STRING,
      nome_escola: DataTypes.STRING,
      formato_aulas: DataTypes.STRING,
      professores_usando_mascara: DataTypes.STRING,
      alunos_usando_mascara: DataTypes.STRING,
      distanciamento_sala: DataTypes.STRING,
      distanciamento_merenda: DataTypes.STRING,
      espaco_alternativo_merenda: DataTypes.STRING,
      ventilacao: DataTypes.STRING,
      patio_descoberto: DataTypes.STRING,
      agua_lavar_maos: DataTypes.STRING,
      area_verde: DataTypes.STRING,
      vacinacao: DataTypes.STRING,
      testes: DataTypes.STRING,
      confirma_veracidade: DataTypes.STRING,
      complemento: DataTypes.TEXT,
    }, {
      sequelize: connection,
      timestamps: true,
      modelName: 'respostas'
    })
  }

  static associate(models) {
    this.belongsTo(models.Escola, { foreignKey: 'escola_id', as : 'escola' })
  }
}

module.exports = Resposta;