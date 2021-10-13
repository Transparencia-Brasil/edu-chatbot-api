'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('respostas', 'escola_id', { type: Sequelize.DataTypes.STRING });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('respostas', 'escola_id');
  }
};
