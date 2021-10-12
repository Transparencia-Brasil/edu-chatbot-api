'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('respostas', 'agua_beber');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('respostas', 'agua_beber', { type: Sequelize.DataTypes.STRING });
  }
};
