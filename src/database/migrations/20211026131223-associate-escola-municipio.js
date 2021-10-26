"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("escolas", {
      fields: ["co_municipio"],
      type: "FOREIGN KEY",
      name: "escola_municipio_fkey",
      references: { table: "municipios", field: "codigo_ibge" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("escolas", "escola_municipio_fkey");
  },
};
  