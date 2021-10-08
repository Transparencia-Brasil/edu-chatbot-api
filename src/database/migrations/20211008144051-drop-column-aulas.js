'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('respostas', 'aulas');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('respostas', 'aulas', { type: Sequelize.DataTypes.STRING });
  }
};
