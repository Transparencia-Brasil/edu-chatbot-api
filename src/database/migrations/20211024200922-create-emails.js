'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('emails', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      escola_id: Sequelize.DataTypes.INTEGER,
      email_gestao: Sequelize.DataTypes.STRING,
    });
    await queryInterface.addConstraint('emails', {
      fields: ['escola_id'],
      type: 'FOREIGN KEY',
      name: 'emails_codigoEscola_fkey',
      references: { table: 'escolas', field: 'co_entidade' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('emails', 'emails_codigoEscola_fkey');
    await queryInterface.dropTable('emails');
  }
};
