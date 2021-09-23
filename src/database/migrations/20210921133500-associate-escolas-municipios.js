'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('escolas', {
      fields: ['co_uf'],
      type: 'FOREIGN KEY',
      name: 'escolas_co_uf_fkey',
      references: { table: 'ufs', field: 'codigo_uf' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
    await queryInterface.addConstraint('escolas', {
      fields: ['co_municipio'],
      type: 'FOREIGN KEY',
      name: 'escolas_co_municipio_fkey',
      references: { table: 'municipios', field: 'codigo_ibge' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('escolas', 'escolas_co_uf_fkey')
    await queryInterface.removeConstraint('escolas', 'escolas_co_municipio_fkey')
  }
};
