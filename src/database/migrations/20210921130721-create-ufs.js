'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ufs', {
      codigo_uf: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      uf: Sequelize.DataTypes.STRING,
      nome: Sequelize.DataTypes.STRING,
      latitude: Sequelize.DataTypes.FLOAT,
      longitude: Sequelize.DataTypes.FLOAT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ufs');
  }
};
