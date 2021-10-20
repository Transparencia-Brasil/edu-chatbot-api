'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('respostas', 'ventilacao', { type: Sequelize.DataTypes.STRING });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('respostas', 'ventilacao');
  }
};
