'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('respostas', 'vacinacao', { type: Sequelize.DataTypes.STRING });
    await queryInterface.addColumn('respostas', 'testes', { type: Sequelize.DataTypes.STRING });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('respostas', 'vacinacao');
    await queryInterface.removeColumn('respostas', 'testes');
  }
};
