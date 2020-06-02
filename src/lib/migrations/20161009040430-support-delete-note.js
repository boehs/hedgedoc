'use strict'
module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Notes', 'deletedAt', Sequelize.DATE).catch(function (error) {
      if (error.message === 'SQLITE_ERROR: duplicate column name: deletedAt' || error.message === "ER_DUP_FIELDNAME: Duplicate column name 'deletedAt'" || error.message === 'column "deletedAt" of relation "Notes" already exists') {
        // eslint-disable-next-line no-console
        console.log('Migration has already run… ignoring.')
      } else {
        throw error
      }
    })
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Notes', 'deletedAt')
  }
}
