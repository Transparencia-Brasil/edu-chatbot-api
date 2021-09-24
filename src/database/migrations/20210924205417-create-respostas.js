'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('respostas', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: Sequelize.DataTypes.STRING,
      aluno_rede_publica: Sequelize.DataTypes.STRING,
      aulas: Sequelize.DataTypes.STRING,
      formato_aulas: Sequelize.DataTypes.STRING,
      professores_usando_mascara: Sequelize.DataTypes.STRING,
      alunos_usando_mascara: Sequelize.DataTypes.STRING,
      quantidade_alunos_aula_presencial: Sequelize.DataTypes.INTEGER,
      distanciamento_sala: Sequelize.DataTypes.STRING,
      distanciamento_merenda: Sequelize.DataTypes.STRING,
      espaco_alternativo_merenda: Sequelize.DataTypes.STRING,
      patio_descoberto: Sequelize.DataTypes.STRING,
      agua_lavar_maos: Sequelize.DataTypes.STRING,
      agua_beber: Sequelize.DataTypes.STRING,
      area_verde: Sequelize.DataTypes.STRING,
      confirma_veracidade: Sequelize.DataTypes.STRING,
      complemento: Sequelize.DataTypes.TEXT,
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('respostas');
  }
};
