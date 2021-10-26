"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("respostas", {
      fields: ["escola_id"],
      type: "FOREIGN KEY",
      name: "respostas_escola_id_fkey",
      references: { table: "escolas", field: "co_entidade" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("respostas", "respostas_escola_id_fkey");
  },
};
  