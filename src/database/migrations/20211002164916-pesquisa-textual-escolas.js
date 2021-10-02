'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.sequelize.query(`
        ALTER TABLE escolas ADD COLUMN fulltext_vector TSVECTOR;`,
        { transaction });
      await queryInterface.sequelize.query(`
        UPDATE escolas SET fulltext_vector = to_tsvector('Portuguese', no_entidade);`,
        { transaction });
      await queryInterface.sequelize.query(`
        CREATE INDEX id_escolas_fulltext_vector ON escolas USING gin(fulltext_vector);`,
        { transaction });
      await queryInterface.sequelize.query(`
        CREATE TRIGGER escolas_vector_update
        BEFORE INSERT OR UPDATE ON escolas
        FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger('fulltext_vector', 'pg_catalog.Portuguese', no_entidade);`,
        { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.sequelize.query(`
        DROP TRIGGER escolas_vector_update ON escolas`,
        { transaction });
      await queryInterface.removeIndex('escolas', 'id_escolas_fulltext_vector',
        { transaction });
      await queryInterface.removeColumn('escolas', 'fulltext_vector',
        { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
