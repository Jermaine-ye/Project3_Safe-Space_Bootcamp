"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("languages", [
      {
        // id: 1,
        language: "EN_CN",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 2,
        language: "EN_TM",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        // id: 3,
        language: "EN_MA",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("languages", null, {});
  },
};
