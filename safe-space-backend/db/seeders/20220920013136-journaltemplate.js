"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("journaltemplates", [
      {
        name: "Individual",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Couple",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("journaltemplates", null, {});
  },
};
