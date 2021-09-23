'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('municipios', {
      codigo_ibge: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
      },
      nome: Sequelize.DataTypes.STRING,
      latitude: Sequelize.DataTypes.FLOAT,
      longitude: Sequelize.DataTypes.FLOAT,
      capital: Sequelize.DataTypes.STRING,
      codigo_uf: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'ufs', key: 'codigo_uf' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      siafi_id: Sequelize.DataTypes.INTEGER,
      ddd: Sequelize.DataTypes.INTEGER,
      fuso_horario: Sequelize.DataTypes.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('municipios');
  }
};
